import qs from "qs";
//import redirectSSL from 'redirect-ssl'
require("dotenv").config();
console.log(process.env.ALGOLIA_APP_ID);
console.log(process.env.AUTH0_DOMAIN);
export default {
  telemetry: false,
  env: {
    APP_URL: process.env.APP_URL,
    REALM_APP_ID: process.env.REALM_APP_ID,
    REALM_APP_KEY: process.env.REALM_APP_KEY,
    JWTSigningKey: process.env.JWTSigningKey,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    MAPBOX_ZOOM: process.env.MAPBOX_ZOOM,
    MAPBOX_LAT: process.env.MAPBOX_LAT,
    MAPBOX_LNG: process.env.MAPBOX_LNG,
    MAPBOX_RADIUS: process.env.MAPBOX_RADIUS,
    MAPBOX_MINZOOM: process.env.MAPBOX_MINZOOM,
    MAPBOX_MAXZOOM: process.env.MAPBOX_MAXZOOM,
    MAP_LAZY_LOADING_NUMBER_OF_ITEMS:
      process.env.MAP_LAZY_LOADING_NUMBER_OF_ITEMS,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE:
      process.env.MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE,
    MAPBOX_MARKER_COLOR_DISTRIBUTOR:
      process.env.MAPBOX_MARKER_COLOR_DISTRIBUTOR,
    TABLE_ITEMS_PER_PAGE: process.env.TABLE_ITEMS_PER_PAGE,
    TABLE_ITEMS_PER_PAGE_LIST: process.env.TABLE_ITEMS_PER_PAGE_LIST,
    MAP_TURF_DISTANCE_UNITS: process.env.MAP_TURF_DISTANCE_UNITS,
    TECHNICAL_QUESTIONS_ID_PREFIX: process.env.TECHNICAL_QUESTIONS_ID_PREFIX,
    WARRANTY_REGISTRATION_ID_PREFIX:
      process.env.WARRANTY_REGISTRATION_ID_PREFIX,
    DISTRIBUTORSHIP_APPLICATION_ID_PREFIX:
      process.env.DISTRIBUTORSHIP_APPLICATION_ID_PREFIX,
    DEMONSTRATION_REQUEST_ID_PREFIX:
      process.env.DEMONSTRATION_REQUEST_ID_PREFIX,
    GUARANTEE_TRIAL_OFFER_PROGRAM_ID_PREFIX:
      process.env.GUARANTEE_TRIAL_OFFER_PROGRAM_ID_PREFIX,
    REPAIRS_RETURNS_ID_PREFIX: process.env.REPAIRS_RETURNS_ID_PREFIX,
    CONTACT_US_ID_PREFIX: process.env.CONTACT_US_ID_PREFIX,
    COST_SAVINGS_EVALUATION_ID_PREFIX:
      process.env.COST_SAVINGS_EVALUATION_ID_PREFIX,
    MAPBOX_STYLE: process.env.MAPBOX_STYLE,
    MAPBOX_SEARCH_RADIUS: process.env.MAPBOX_SEARCH_RADIUS,
    MAPBOX_SEARCH_ZOOM: process.env.MAPBOX_SEARCH_ZOOM,
    MAP_SEARCH_DISTANCE_UNITS: process.env.MAP_SEARCH_DISTANCE_UNITS,
    LAZY_LOADING_NUMBER_OF_ITEMS: process.env.LAZY_LOADING_NUMBER_OF_ITEMS,
    MAP_POSITION_Y: process.env.MAP_POSITION_Y,
    BANNER_COLOR: process.env.BANNER_COLOR,
    BANNER_TEXT_COLOR: process.env.BANNER_TEXT_COLOR,
    GTM: process.env.GTM,
  },
  /*
   ** Headers of the page
   */
  head: {
    // CD (KO on 20220630): titleTemplate is set in the layout. homepage is set in index.vue
    // titleTemplate: '%s - NSK America Corporation',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "NSK" },
    ],
    // CD (KO on 20220808): commented out the below 3 meta tags due to them affecting the mobile layout of the site. These 3 tags were part of the favicon setup.
    // meta: [
    //   { name: 'msapplication-TileColor', content: '#ffffff' },
    // ],
    // meta: [
    //   { name: 'msapplication-config', content: '/img/browserconfig.xml' },
    // ],
    // meta: [
    //   { name: 'theme-color', content: '#ffffff' },
    // ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://nuxtjs.org/favicon.ico",
      },

      {
        rel: "apple-touch-icon",
        type: "",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
      {
        rel: "manifest",
        type: "",
        href: "/img/site.webmanifest",
      },
      {
        rel: "mask-icon",
        type: "",
        href: "/img/safari-pinned-tab.svg",
        color: "#0079c1",
      },
      {
        rel: "shortcut icon",
        type: "",
        href: "/img/favicon.ico",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["normalize.css"],

  image: {
    domains: ["nsk.nyc3.cdn.digitaloceanspaces.com"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/mapbox.client.js", mode: "client" },
    "~/plugins/vue2-editor.client.js",
    { src: "~/plugins/vue-instantsearch.js" },
    { src: "~/plugins/splide.client.js", mode: "client" },
    { src: "~/plugins/vue-tags-input", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration (see below for example)
      default: "~/plugins/my-alternative-apollo-config.js",
    },
  },

  auth: {
    redirect: {
      login: "/", // redirect user when not connected
      logout: "/", // redirect user when not connected
      callback: "/auth/signed-in",
      home: "/logged",
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
      },
    },
    plugins: ["~/plugins/auth.js", "~/plugins/appmetadata.js"],
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    jit: process.env.TAILWIND_JIT === "true",
    exposeConfig: false,
    config: {},
    viewer: true,
  },

  googleFonts: {
    families: {
      "Open+Sans": true,
      //'IBM+Plex+Sans': true,
      Roboto: true,
      Lato: true,
    },
    base64: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    //'@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // dotenv
    ["@nuxtjs/dotenv", { path: "./" }],
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        /* module options */
      },
    ],
    //'@nuxtjs/moment',
    "~/modules/nuxt-content-algolia",
  ],

  /*
   ** Modules
   */
  modules: [
    // https://go.nuxtjs.dev/content
    //'@nuxt/content',
    "@nuxtjs/apollo",
    // axios is required by @nuxtjs/auth
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    // https://auth.nuxtjs.org
    "@nuxtjs/auth",
    "@nuxtjs/dotenv",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/gtm",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
    // '~/modules/nuxt-content-algolia.js',
  ],
  proxy: [["https://nsk.cinnamondigital.app/api/*", { ws: false }]],
  serverMiddleware: [
    //redirectSSL,
    "~/middleware/redirects.js",
    "~/api/v1/upload",
    "~/api/v1/send-email",

    "~/api/v1/support/technical-questions/send-email",
    "~/api/v1/support/warranty-registration/send-email",
    "~/api/v1/support/distributorship-application/send-email",
    "~/api/v1/support/repair-return/send-email",
    "~/api/v1/dashboard/technical-questions/send-email",
    "~/api/v1/dashboard/demonstration-request/send-email",
    "~/api/v1/dashboard/guarantee-trial-offer-program/send-email",
    "~/api/v1/dashboard/distributorship-application/send-email",
    "~/api/v1/dashboard/repair-return/send-email",
    "~/api/v1/dashboard/cost-savings-evaluation/send-email",
    "~/api/v1/dashboard/forms/guarantee-trial-offer-program/send-email",
    "~/api/v1/dashboard/forms/demonstration-request/send-email",
    "~/api/v1/cost-savings-evaluation/send-email",
    "~/api/v1/cost-savings-evaluation/create-pdf",
    "~/api/v1/dashboard/cms/news/upload",
    "~/api/v1/dashboard/cms/events/upload",
    "~/api/v1/dashboard/cms/ads/upload",
    "~/api/v1/dashboard/cms/videos/upload",
    "~/api/v1/dashboard/cms/resources/upload",
    "~/api/v1/auth/management",
    "~/api/v1/auth/users",
    "~/api/v1/contact-us/send-email",
  ],
  content: {
    // Options
  },
  nuxtContentAlgolia: {
    appId: process.env.ALGOLIA_APP_ID,
    // !IMPORTANT secret key should always be an environment variable
    // this is not your search only key but the key that grants access to modify the index
    apiKey: process.env.ALGOLIA_API_KEY,

    // relative to content directory
    realm: {
      appId: process.env.REALM_APP_ID,
      apiKey: process.env.REALM_APP_KEY,
      database: process.env.ALGOLIA_MONGODB_DATABASE,
      collections: [
        {
          name: "series",
          index: process.env.ALGOLIA_INDEX || "series-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "distributors_and_sales_representatives",
          index:
            process.env.ALGOLIA_INDEX ||
            "distributors_and_sales_representatives-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "news",
          index: process.env.ALGOLIA_INDEX || "news-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "events",
          index: process.env.ALGOLIA_INDEX || "events-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "videos",
          index: process.env.ALGOLIA_INDEX || "videos-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "ads",
          index: process.env.ALGOLIA_INDEX || "ads-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
        {
          name: "faqs",
          index: process.env.ALGOLIA_INDEX || "faq-mongodb", // for differentiation purposes, add -mongodb if the data is coming from mongodb. example: news-mongodb, faq-mongodb etc
          query: {},
        },
      ],
    },
    content: {
      paths: [
        {
          name: "products",
          // optional (will use name if index not specified)
          index: process.env.ALGOLIA_INDEX || "products-content", // for differentiation purposes, add -content if the data is coming from nuxt-content. This will be for products-content, series-content
          fields: [
            "details",
            "productType",
            "isAccessoryOrSparePartFor",
            "toolType",
            "productCategory",
            "sku",
            "slugForUrl",
            "productStatus",
            "machineType",
            "productDiameterMetric",
            "productDiameterInch",
            "colletType",
            "application",
            "tags",
          ],
        },
        {
          name: "series",
          // optional (will use name if index not specified)
          index: process.env.ALGOLIA_INDEX || "series-content",
          fields: [
            "description",
            "name",
            "slugForUrl",
            "image",
            "category",
            "handToolCategory",
            "tags",
          ],
        },
      ],
    },
  },

  gtm: {
    enabled: true, // Always send real GTM events (also when using `nuxt dev`)
    id: process.env.GTM,
    // debug: false,
    // layer: 'dataLayer',
    // variables: {},

    pageTracking: true,
    // pageViewEventName: 'nuxtRoute',

    // autoInit: true,
    // respectDoNotTrack: true,

    // scriptId: 'gtm-script',
    // scriptDefer: false,
    // scriptURL: 'https://www.googletagmanager.com/gtm.js',
    // crossOrigin: false,

    noscript: true,
    noscriptId: "gtm-noscript",
    noscriptURL: "https://www.googletagmanager.com/ns.html",
  },

  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
    exclude: ["/dashboard/**"],
    // sitemaps: [
    //   {
    //     path: '/sitemap-foo.xml',
    //     routes: ['foo/1', 'foo/2'],
    //     gzip: true
    //   }, {
    //     path: '/folder/sitemap-bar.xml',
    //     routes: ['bar/1', 'bar/2'],
    //     exclude: ['/**']
    //   }
    // ]
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  //content: {},

  build: {
    vendor: ["@johmun/vue-tags-input"],
    publicPath: process.env.PUBLIC_PATH,
    transpile: ["vue-instantsearch", "instantsearch.js/es"],
  },
  postcss: {
    /*plugins: {
      tailwindcss: './tailwind.config.js'
    },*/
    /*preset: {
      features: {
        // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
        'focus-within-pseudo-class': false
      }
    }*/
  },
  /*vendor: ['axios'],*/
  /*
   ** You can extend webpack config here
   */
  /*extend(config, ctx) {
  }*/ router: {
    parseQuery(queryString) {
      return require("qs").parse(queryString);
    },
    stringifyQuery(object) {
      var queryString = require("qs").stringify(object);
      return queryString ? "?" + queryString : "";
    },
    middleware: ["global"],
  },
  axios: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.APP_URL
        : "http://localhost:3000/",
  },
};
