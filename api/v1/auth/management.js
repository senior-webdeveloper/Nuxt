import express from "express";
import axios from "axios";
const app = express();
app.use(express.json());

const clientId = process.env.AUTH0_API_ID;
const clientSecret = process.env.AUTH0_API_SECRET;
const clientDomain = process.env.AUTH0_DOMAIN;

app.post("/", async (req, res, next) => {
  const {
    body: { email },
  } = req;
  try {
    const {
      data: { access_token, token_type },
    } = await axios.post("https://" + clientDomain + "/oauth/token", {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      audience: "https://" + clientDomain + "/api/v2/",
    });
    try {
      const {
        data: [{ app_metadata: appMetaData }],
      } = await axios.get(
        `https://${clientDomain}/api/v2/users?q=email:"${email}"&search_engine=v3`,
        {
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        }
      );
      res.json(appMetaData);
    } catch (err) {
      console.log("managenemt error", err.response);
      next(err);
    }
  } catch (err) {
    console.log("managenemt error 2", err.response);
    next(err);
  }
});

export default {
  path: "/api/v1/auth/management",
  handler: app,
};
