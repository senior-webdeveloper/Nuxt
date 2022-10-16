require('dotenv').config();
import express from "express";
import aws from "aws-sdk";
import multer from "multer";

// CD (JE on 20210520): Configure multer
const memoryStorage = multer.memoryStorage();
const upload = multer({
  storage: memoryStorage
});

// CD (AN on 20210623): Middeware
const app = express();
app.use(express.json());

// CD (JE on 20210520): DO spaces config (aws compatible)
const space = new aws.S3({
  endpoint: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  useAccelerateEndpoint: false,
  credentials: new aws.Credentials(
    process.env.DIGITAL_OCEAN_SPACES_KEY,
    process.env.DIGITAL_OCEAN_SPACES_SECRET
  )
});
const bucket = process.env.DIGITAL_OCEAN_SPACES_NAME;

app.post("/", upload.any("files"), async (req, res) => {
  try {
    const files = []
    for (const file of req.files) {
        const fileBuffer = file.buffer;
        const filename = file.originalname.split('.')[0]
        const [, ext] = file.mimetype.split("/");
        // CD (JE on 20210525): upload parameters
        const uploadParams = {
          Bucket: bucket,
          Body: fileBuffer,
          ACL: "public-read",
          Key: `files/${filename}-${Date.now()}.${ext}`
        };
        // CD (JE on 20210520): upload attachment to DO Spaces
        const uploaded = await space.upload(uploadParams).promise();
        files.push(uploaded.Location)
    }
    res.status(200).json(files);
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error: "Oops... something went wrong "});
  }
});

export default {
  path: "/api/v1/upload",
  handler: app
};