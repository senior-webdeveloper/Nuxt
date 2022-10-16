import express from "express";
import aws from "aws-sdk";
import multer from "multer";

// CD (JE on 20210520): Configure multer
const memoryStorage = multer.memoryStorage();
const upload = multer({
  storage: memoryStorage
});

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

const app = express();
app.use(express.json());


app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    const [name, ext] = req.file.originalname.split('.')
    // CD (JE on 20210525): upload parameters
    const uploadParams = {
      Bucket: bucket,
      Body: imageBuffer,
      ACL: "public-read",
      Key: `resources/${name}-${Date.now()}.${ext}`
    };
    // CD (JE on 20210520): upload attachment to DO Spaces
    const uploaded = await space.upload(uploadParams).promise();
    res.status(200).json(uploaded);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

export default {
  path: "/api/v1/dashboard/cms/resources",
  handler: app
};
