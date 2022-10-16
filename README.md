<img src="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/cinnamon.digital/logos/cd-main.svg" width="125" alt="Cinnamon Digital Logo">

# NSK DEV-NEW & UAT-NEW & MASTER

## Stack

- Vuejs/Nuxtjs
- Mongodb (Atlas & Realm)
- Graphql
- Apollo with nuxt/apollo https://www.npmjs.com/package/@nuxtjs/apollo
- Tailwindcss &amp; TailwindUI

## APIs

- Algolia - Vue InstantSearch https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/
- Mapbox
- TurfJS
- Digital Ocean Spaces https://developers.digitalocean.com/documentation/spaces/
  - AWS SDK (S3) - Digital Ocean Spaces compatible
- Cloudflare Stream https://api.cloudflare.com/#stream-videos-properties
- Constant Contact

## AUTHENTICATION AND AUTHORIZATION

Auth0 - https://auth0.com/
- Signup, Login, Password Reset
- Using Universal Login for signup and login
- After signing out, when user wants to login on the same device, it will not automatically signs in the user without asking for login credentials 
- Email verification upon signup is turned off

## PACKAGES

- @nuxt/content - https://content.nuxtjs.org/
- @nuxtjs/apollo - https://www.npmjs.com/package/@nuxtjs/apollo
- @nuxtjs/dotenv - https://www.npmjs.com/package/@nuxtjs/dotenv
- graphql-tag - https://www.npmjs.com/package/graphql-tag
- realm-web - https://www.npmjs.com/package/realm-web
- @headlessui/vue - https://github.com/tailwindlabs/headlessui/tree/develop/packages/%40headlessui-vue (will be possible once Nuxt v3 is released)
- @splidejs/vue-splide - https://splidejs.com (used for slider)
- @johmun/vue-tags-input - http://www.vue-tags-input.com/ (used for input of multiple email addresses in one field, use of tags)
- aws-sdk - https://www.npmjs.com/package/aws-sdk digital ocean spaces compatible used for uploading static assets (pdf, images, etc)
- html-pdf - https://www.npmjs.com/package/html-pdf used to generate pdf for email attachments
- @turf/turf - https://www.npmjs.com/package/@turf/turf used for Mapbox GeoJSON data (distance feature) to calculate distance on listings.
- vue-numeric - https://www.npmjs.com/package/vue-numeric
- see package.json for full list

## PLUGINS

- @tailwindcss/colors
- @tailwindcss/forms
- @tailwindcss/line-clamp - not yet installed

## DATA

### MongoDB

### Nuxt/Content

Nuxt content is being used by the following pages
- **Products** and **Series** detail pages
- **Solutions** pages

### GraphQL

- Used for 'fetch'
- Used for all other CRUD operations
- Used for 'mutations'

### Algolia

- used for the global search feature

1. Create a new Application (Free Plan / US East Data Center)
1. Record the API Keys
1. Update your .env file
1. Run the app by either running locally or on the server. This will trigger the Algolia Indices to be created in Algolia.
1. Manage each new Index in Algolia by Importing the previously Exported index file. These can be found in the App root folder /algolia/index-configurations. Repeat for each index.
1. Test

### NAMING CONVENTIONS

- Database Collections: lowercase_underscore
- Pages: lowercase-dash
- Components: PascalCase
- Global Components: AppPascalCase
- Layout Components: ThePascalCase

### Comments

Let's be sure to add comments to any code that we touch. Follow this format:
** CD ([Initials of developer] on YYYYMMDD): blah blah blah **

# SETUP

## ENV

APP_URL= application domain. for development use http://localhost:3000 otherwise production domain

CD (KO on 20210521): Removed APP_URL due to DO Apps not building. Adding APP_URL to the ENV Variables in DO Apps isn't working yet.

Pages affected:

\nsk\api\v1\support\technical-questions\send-email.js

\nsk\api\v1\cost-savings-evaluation\send-email.js

Changed this:

<link href="${process.env.APP_URL}/css/css" rel="stylesheet" />

To this:

<link href="/css/css" rel="stylesheet" />

## PDF

`static/css/pdf.css` - Location where to add/update css related to pdf styling

### Bitwarden: NSK Dev .env

Duplicate .env.example & rename to .env for dev and local development. See bitwarden entry for list of variables and values.

    TAILWIND_JIT=
    JWTSigningKey=
    AUTH0_DOMAIN=
    AUTH0_CLIENT_ID=
    AUTH0_API_ID=
    AUTH0_API_SECRET=
    APP_URL
    REALM_APP_ID=
    REALM_APP_KEY=
    ALGOLIA_APP_ID=
    ALGOLIA_API_KEY=
    DIGITAL_OCEAN_SPACES_ENDPOINT=
    DIGITAL_OCEAN_SPACES_KEY=
    DIGITAL_OCEAN_SPACES_SECRET=
    DIGITAL_OCEAN_SPACES_NAME=
    CLOUDFLARE_ACCOUNT_ID=
    CLOUDFLARE_STREAM_API_TOKEN=
    SENDGRID_API_KEY=
    SENDGRID_API_KEY_ID=
    SENDGRID_EMAIL_ADDRESS=
    CONSTANT_CONTACT_API_NAME=
    CONSTANT_CONTACT_API_KEY=
    CONSTANT_CONTACT_API_SECRET=
    CONSTANT_CONTACT_LIST=
    CONSTANT_CONTACT_LIST_ID=
    CONSTANT_CONTACT_AUTH_CODE=
    TABLE_ITEMS_PER_PAGE=
    TABLE_ITEMS_PER_PAGE_LIST=
    LAZY_LOADING_NUMBER_OF_ITEMS=
    MAPBOX_TOKEN=
    MAPBOX_STYLE=
    MAPBOX_ZOOM=
    MAPBOX_LAT=
    MAPBOX_LNG=
    MAPBOX_MINZOOM=
    MAPBOX_MAXZOOM=
    MAP_LAZY_LOADING_NUMBER_OF_ITEMS=
    MAPBOX_SEARCH_RADIUS=
    MAPBOX_SEARCH_ZOOM=
    MAP_SEARCH_DISTANCE_UNITS=
    MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE=
    MAPBOX_MARKER_COLOR_DISTRIBUTOR=
    TECHNICAL_QUESTIONS_ID_PREFIX=
    WARRANTY_REGISTRATION_ID_PREFIX=
    DISTRIBUTORSHIP_APPLICATION_ID_PREFIX=
    DEMONSTRATION_REQUEST_ID_PREFIX=
    GUARANTEE_TRIAL_OFFER_PROGRAM_ID_PREFIX=
    REPAIRS_RETURNS_ID_PREFIX=
    CONTACT_US_ID_PREFIX=
    COST_SAVINGS_EVALUATION_ID_PREFIX=
    GTM=

Use the following local values for the following fields. For deployment to dev or live, use the domain name of the app.

- Allowed Callback URLs
  http://localhost:3000/auth/signed-in
- Allowed Logout URLs
  http://localhost:3000/
- Allowed Origins (CORS)
  http://localhost:3000/

## MONGODB and REALM

All data, except for user details are saved in the MongoDB collections.

### Deployment Settings

### Schema and Rules

### Auth Settings

## DNS

## SERVER

Setup a new App in Digital Ocean or the provider of your choice.

## CI/CD

1. Select repo
2. Select a branch
3. Check auto deploy changes
4. Set env variables (from env file, values in Bitwarden)
5. Set to HTTP Port to 3000
6. Choose plan

# To Run App in Local

`npm install`

`npm run dev`

# Digitalocean Apps Commands

`npm run build`

`npm start -- --hostname 0.0.0.0`

# DEPLOYMENT

In nuxt.config.js

1. change sitemap host url
2. add in GTM ID

# FEATURES

## CMS Dashboard
The CMS dashboard is where content for the site's frontend is being managed. It also serves as a file repository being downloaded by NSK's Distributors.

### Form submissions

- All form submissions are found in separate tables for easy browsing of data
- All forms, except the Warranty Registration, have status field(s) that can be updated depending on the progress of that submission

### Email Notifications related to form submissions and status updates

- App has a CMS section where client can edit the email notification's recipients and email **Subject** and **Content**
- Email addresses for 1 form cannot be the same for the email address fields **To**, **BCC**, **CC**
- Email notifications are sent out to all recipients in the CMS' User and NSK sections after a form is submitted
- Email notifications are sent out to all recipients in the CMS' NSK sections after a status change was made
- PDF form of the user's submitted form is being sent out to CMS' NSK emails only

### Sections on the website where data can be managed in the dashboard

- News
- Ads
- Videos
- Banner
- Events

## Map

- Merged the Sales Representatives and Distributors in a single map, with each of them having different colored map markers
- Show distance of listings from the searched keyword place. Can be in miles or kilometers, just update the env variable **MAP_SEARCH_DISTANCE_UNITS=miles**
- Change map styles by choosing from this list https://docs.mapbox.com/api/maps/styles/ or create a custom style for the env variable **MAPBOX_STYLE=**
- Options in the Category filter are dynamically generated from the existing data
- Each card, when clicked, will open the location on the map
- Order prioritization of cards is as follows: Top Speed > National Distributor > shortest distance from searched locations (when searching) > all other cards 

# DATA

### File Uploads

For embedded videos, videos are played in modal using the embedded code.
- https://developers.cloudflare.com/stream/uploading-videos
- not connected to the site

For videos uploaded to Cloudflare, videos should be played using the Cloudflare Stream API player. Work with team on required options for player.
- https://developers.cloudflare.com/stream/viewing-videos
- not connected to the site

For thumbnail images: https://developers.digitalocean.com/documentation/spaces/
- currently being used on other areas of the site (e.g. /news page)
- Spaces folder is "videos"

### PDFs Generated after Form Submissions

PDFs are stored in S3.

### Toast Notifications
To change toast notifications search
- "setNotification" for editing cms sections or forms
- "notification:" for submitting forms

## SEO

- NSK wants the homepage to be slightly different than the internal pages. It'll say the company name first, whereas other pages will place the company name last and the page's name first.
- Global metadata is set in nuxt.config.js
- titleTemplates are set in the layout files; layouts/default.vue, layouts/product-detail.vue & layouts/dashboard.vue
- Homepage metadata is set directly in pages/index.vue

### Google Analytics
https://analytics.google.com

- [ ] create GA account and property

### Google Tag Manager
https://tagmanager.google.com

- [ ] create GTM account
- [ ] add GTM ID to nuxt.config.js
- [ ] test
- [ ] add containers to GTM
- [ ] submit sitemaps
- [ ] test

## Deployments

https://nuxtjs.org/integrations/deployments/digital-ocean/

### `DEV`
- use the DEV branch as per usual
- test locally
- push commits to the DEV branch
- pushing commits to DEV will no longer auto deploy a DO APP
- check with Kevin if there are major changes needing to be tested on a DEV environment in DO APPs. We can create one on the fly.

### `UAT`
- do not commit to this branch
- UAT is meant for client testing
- PR from DEV to UAT will auto deploy on DO APPs
- Testing must be done after each PR to UAT

### `MASTER`
- do not commit to this branch
- MASTER is meant for Production / Live site
- If needed, add nsk.cinnamondigital.app as a test domain in SETTINGS > APP > DOMAINS
- PR from UAT to MASTER will auto deploy on DO APPs
- Testing must be done after each PR to MASTER
- create a Release using Semantic Versioning https://semver.org/
- update version in package.json on DEV 
- update README.md on DEV (if needed)

### `Initial Launch`
- [ ] Update robots.txt with the path of the sitemap.xml file
- [ ] Final tests
- [ ] Setup SEO
- [ ] Review CloudFlare settings
- [ ] Update DNS
- [ ] clean out old DNS entries
- [ ] add new DNS entries
- [ ] Update Digital Ocean App with domain _(Apps > Settings > App > Domains > Edit > Add Domain)_

# Known Issues

## Can't run site locally

### Things to check

- .env file
- package-lock.json
- node_modules
- .nuxt  >  if missing, try running 
```npm run build```
