import console from "console";
import * as Realm from "realm-web";
import jwt from "jsonwebtoken";
async function loginCustomJwt(jwt, app) {
  // Create a Custom JWT credential
  const credentials = Realm.Credentials.jwt(jwt);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    // assert(user.id === app.currentUser.id);
    return user;
  } catch (err) {
    console.error("Failed to log in", err);
  }
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

export default async function ({ $auth, env, $apolloHelpers }) {
  const app = Realm.App.getApp(env.REALM_APP_ID);
  
  if (!$auth.loggedIn) {
    $apolloHelpers.onLogout(/* if not default you can pass in client as first argument, and you can skip reset store as the second argument */);
    const accessToken = await loginApiKey(env.REALM_APP_KEY, app);
  
    $apolloHelpers.onLogin(accessToken.accessToken);
    return;
  }

  /* CD (EV on 20210211): create custom jwt https://docs.mongodb.com/realm/authentication/custom-jwt/#jwt-payload */
  var payload = {
    aud: env.REALM_APP_ID,
    sub: $auth.user.sub,
    exp: Math.floor(Date.now() / 1000) + 360000000,
    iat: Math.floor(Date.now() / 1000),
    user_data: {
      email: $auth.user.email,
    },
  };

  /* CD (EV on 20210211):decode the payload */
  var token = jwt.sign(payload, env.JWTSigningKey);
  /* CD (EV on 20210211):set apollo header as the accessToken from  loginCustomJwt*/
  const accessToken = (await loginCustomJwt(token, app))
    .accessToken; /* if not default you can pass in client as second argument, you can set custom cookies attributes object as the third argument, and you can skip reset store as the fourth argument */

  $apolloHelpers.onLogin(accessToken);

  const username = $auth.user.username;
}
