<img src="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/cinnamon.digital/logos/cd-main.svg" width="125" alt="Cinnamon Digital Logo">

# Cinnamon Digital, LLC 

DOCS

FOR INTERNAL USE ONLY

https://cinnamon.digital/

&copy; 2013 – 2022 All Rights Reserved.

# Duplicate a MongoDB Realm App

## Export Realm App


1. To get a MongoDB Cloud API Key, open your Realm app in the Realm UI. Navigate to "Deployment" in the left navigation menu, and select the "Export App" tab. From there, create a programmatic API key to authenticate your realm-cli session.

2. Setup Authentication

- MongoDB > [Organization] > [Project Name] > Realm > [Your App] > Authentication > Custom JWT Authentication > Create a Signing Key called "JWTSigningKey"

https://www.mongodb.com/docs/realm/tutorial/jwt/

https://jwt.io/

### DO NOT CHECK THE 'secret base64 encoded' BOX

https://www.epochconverter.com/ 

https://keygen.io/

3. MongoDB > [Organization] > [Project Name] > Realm > [Your App] > Authentication > API Keys > create a new key called "REALM_APP_KEY" > copy the key secret for REALM_APP_KEY

### If you need to DELETE a JWT Token MongoDB > [Organization] > [Project Name] > Realm > [Your App] > Values > under 'Actions' choose 'Delete Secret' 

4. Open your terminal and change your directory to wherever you plan to export the Realm App to.

Kevin:

```cd /realm_apps/```

5. Make sure realm-cli is installed

```npm install -g mongodb-realm-cli```

6. Login

Authenticate to the realm-cli:

```realm-cli login --api-key <my-api-key> --private-api-key <my-private-api-key>```

### NSK DEV, NSK UAT (new), NSK PRODUCTION
App ID:
[APP-ID]

Public Key:
[PUBLIC_KEY]

Private Key:
[PRIVATE_KEY]

JWTSigningKey
[see BitWarden .env file for project]

```realm-cli login --api-key [DEPLOYMENT PUBLIC KEY] --private-api-key [DEPLOYMENT PRIVATE KEY]```

```This action will terminate the existing session for user: xxxxxxxx, would you like to proceed? Yes```

7. Run the Pull Command:

### NSK DEV, NSK UAT (new), NSK PRODUCTION
```realm-cli pull --remote [APP-ID]```

8. Choose the Atlas Project that you'd like to export. You can hover over the Realm App in the menu to see the ID shown in the URL.

9. Done.

## Duplicate Realm App to be Used for new Realm App

1. Make sure you have the app you want to duplicate AND the new app exported locally

2. Go to the app that you want to duplicate and Copy all folders (DO NOT COPY THE realm_config.json file)

3. Go to the new app and Paste all the copied folders. 

- Delete the old folders

- Rename the new folders (remove " copy" from the folder names)

4. Go to the app that you want to duplicate > data_sources > mongodb-atlas > [OLD app name]

- Copy that folder

5. Go to the new app > data_sources > mongodb-atlas > [NEW app name]

6. Paste the copied folder

7. **Rename the folder to the new app name**

8. **Find and replace the old app name with the new app name in all files**

9. **Find and replace the old DB name with the new DB name in all files. Most of these can be found in the relationships.json files, but might also be in other locations.**

example *DevNSK" is the DB:
```
"ref": "#/relationship/mongodb-atlas/DevNSK/tags",
```

10. Go to "/data_sources/mongodb-atlas/config.json"

11. **Rename the cluster to the new app's cluster name. If you didn't specifically setup an Atlas Cluster, then Realm likely auto created a name for you (such as "RealmCluster").**

12. Open your terminal and change to the new app's directory

13. Make sure you're logged into the new Realm App (see the login step above for help)

14. Push your local Realm App to the remote app

- Use this to test your push:

```realm-cli push --remote [APP-ID] --dry-run```

- Use this to push:

```realm-cli push --remote [APP-ID]```

```Please confirm the changes shown above (y/N)```

- If all looks good, "y" > ENTER

## Migrating the data from an existing MongoDB Atlas DB
  
1. In order to generate a backup from our databse we will run 'mongodump' with the connection string found in Connect > (if you haven't connected before, you'll be prompted to 'Create a Database User') > Connect with mongodb shell, in this format:
  
```mongodump "mongodb+srv://devcluster001.ukr1d.mongodb.net/DevNSK" --username nsk-dev```
  
- This will create a 'dump' directory where the command was ran, inside there will be a directory with the database name.

2. Then we will run:
  
```mongorestore "mongodb+srv://realmcluster.z75zw.mongodb.net/UATNSK" --username nsk-uat dump/DevNSK```

## Update your Apps .env file with all the new variables

## Redploy the app (force clear cache)

## Create the 'Owner' user account

1. Create the user from Auth0 with the owner role

2. Use the NSK Dashboard to create all other users

## TEST

# Common Errors

# WIP
## Authentication

### Check Auth0 settings and .env variables

### Helpful Links
https://www.mongodb.com/docs/realm/cli/realm-cli-login/#std-label-realm-cli-login

https://www.mongodb.com/docs/realm/tutorial/jwt/

https://www.mongodb.com/docs/realm/cli/realm-cli-pull/

https://www.mongodb.com/docs/realm/cli/realm-cli-push/

https://www.mongodb.com/docs/mongocli/v1.16/reference/atlas/

https://www.mongodb.com/docs/database-tools/mongodump/?_ga=2.265221388.267405260.1649727116-1263818919.1649112324#mongodump-example-copy-clone-database

https://www.mongodb.com/docs/database-tools/mongodump/?_ga=2.265221388.267405260.1649727116-1263818919.1649112324#copy-clone-a-database

### TO DO
### Try creating the Cluster and DB before the Realm App so that you can choose your own names

- MongoDB > [Organization] > [Project Name] > Atlas > Create a new cluster and DB

### UNKOWNS

- MongoDB > [Organization] > [Project Name] > Realm > [Your App] > Schema:

- Shared > Change Cluster name > Create Cluster