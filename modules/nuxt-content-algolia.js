export default async function ExampleModule(moduleOptions) {
  this.options.nuxtAlgolia = this.options.nuxtContentAlgolia || {};
  const config = {
    hook: "generate:done",
    ...this.options.nuxtAlgolia,
    ...moduleOptions,
  };
  if (!config.appId || !config.apiKey) {
    consola.error(
      new Error("appId and apiKey are required for nuxt-algolia module")
    );
    return;
  }

  this.nuxt.hook("ready", async (nuxt) => {
    console.log("Nuxt is ready");

    // require the nuxt content function
    const {
      $content,
    } = require(`${nuxt.options.srcDir}/node_modules/@nuxt/content`);
    if (config.content) {
      // loop through paths provided at config
      for (let i = 0; i < config.content.paths.length; i++) {
        let path = config.content.paths[i];
        let indexName = path.index || path.name;

        // get the content from the file system
        let docs = await $content(path.name).fetch();

        // transform each "document" to only include the fields specified in the config
        docs = docs.map((doc) => {
          let newDoc = {};
          path.fields.forEach((field) => (newDoc[field] = doc[field]));
          // newDoc.objectID = doc.slug;
          return newDoc;
        });
    
        // for the default version
        const algoliasearch = require("algoliasearch");
        // initialize the algolia search package with our app info and index name
        const client = algoliasearch(config.appId, config.apiKey);

        let index = client.initIndex(indexName);

        // clear the index in case any documents were removed
        index.clearObjects();

        // Finally save the new documents and output a success message
        let { objectIDs } = await index.saveObjects(docs, {
          autoGenerateObjectIDIfNotExist: true,
        });
        consola.success(
          `Indexed ${objectIDs.length} records in Algolia for: ${indexName} from nuxt/content`
        );
      }
    }
    if (config.realm) {
      if (!config.realm.appId || !config.realm.apiKey) {
        consola.error(
          new Error(
            "appId and apiKey are required for nuxt-algolia module realm"
          )
        );
        return;
      }

      async function loginApiKey(apiKey, app) {
        // Create an API Key credential
        const credentials = Realm.Credentials.apiKey(apiKey);
        try {
          // Authenticate the user
          const user = await app.logIn(credentials);
          // `App.currentUser` updates to match the logged in user
          return user;
        } catch (err) {
          console.error("Failed to log in", err);
        }
      }

      const Realm = require("realm-web");
      const app = Realm.App.getApp(config.realm.appId);
      const currentUser = await loginApiKey(config.realm.apiKey, app);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      // const products = mongodb.db("test").collection("products");
      // console.log(await products.find())

      for (let i = 0; i < config.realm.collections.length; i++) {
        let collection = config.realm.collections[i];
        let indexName = collection.index;
        let name = collection.name;
        let query = collection.query || null;
        let projection = collection.projection || null;

        let docs = mongodb.db(config.realm.database).collection(name);
        docs = await docs.find(query, { projection: projection });
 
        docs.forEach(doc => {
          doc.objectID = doc._id.toString()
        })
        // for the default version
        const algoliasearch = require("algoliasearch");
        // // initialize the algolia search package with our app info and index name
        const client = algoliasearch(config.appId, config.apiKey);
        let index = client.initIndex(indexName);
       
        // // clear the index in case any documents were removed
        index.clearObjects();

        // // // Finally save the new documents and output a success message
        let { objectIDs } = await index.saveObjects(docs, {
          autoGenerateObjectIDIfNotExist: true,
        });
        consola.success(
          `Indexed ${objectIDs.length} records in Algolia for: ${indexName} from realm api`
        );
      }
    }
  });
}
