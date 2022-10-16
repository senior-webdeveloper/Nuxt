require('dotenv').config();
import express from "express";
import multer from "multer";
import axios from "axios";
import fs from "fs"
import aws from "aws-sdk";
import path from "path"
// CD (AN on 20210623): tus import works only this way
var tus = require("tus-js-client");
const fsExtra = require('fs-extra')

// CD (AN on 20210623): Middeware
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("creating temporal folder")
  if(!fs.existsSync(__dirname +  "/tmp")) {fsExtra.mkdirSync(__dirname +  "/tmp")}
  next()
})

// CD (AN on 20210623): Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null,__dirname +  "/tmp");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
}
});
let upload = multer({ storage: storage });


const memoryStorage = multer.memoryStorage();
const memoryUpload = multer({
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

// Endpoints
app.post("/upload-thumbnail", memoryUpload.single("thumbnail"), async (req, res) => {
  try {
    const imageBuffer = req.file.buffer;
    const [, ext] = req.file.mimetype.split("/");
    // CD (JE on 20210525): upload parameters
    const uploadParams = {
      Bucket: bucket,
      Body: imageBuffer,
      ACL: "public-read",
      Key: `videos/thumbnail-${Date.now()}.${ext}`
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

app.post("/upload-video", upload.single("video"), async (req, res) => {
  console.log("uploading video")
  const file = fs.createReadStream(req.file.path);
  const size = fs.statSync(req.file.path).size;
  let mediaId = ''

  const options = {
    endpoint: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/stream`,
    headers: {
      'Authorization': `Bearer ${process.env.CLOUDFLARE_STREAM_API_TOKEN}`,
    },
    chunkSize: 10 * 1024 * 1024, // Required a minimum chunk size of 5MB, here we use 10MB.
    metadata: {
      filename: req.file.name,
      filetype: "video/mp4",
      defaulttimestamppct: 0.5,
    },
    uploadSize: size,
    onError: function (error) {
      fsExtra.emptyDirSync(__dirname +  "/tmp")
      res.status("502").json({message: "Internal Server Error"})
      throw error;
    },
    onProgress: function (bytesUploaded, bytesTotal) {
      var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
      console.log(bytesUploaded, bytesTotal, percentage + "%");
    },
    onSuccess: function () {

      fsExtra.emptyDirSync(__dirname +  "/tmp")
      // CD (AN on 20210623): Get the upload information and return the original response.
      axios.get(upload.url, {
        headers: {
          'Authorization': `Bearer ${process.env.CLOUDFLARE_STREAM_API_TOKEN}`,
        },
      })
      .then(response => {
        console.log("response sent")
        res.status(200).json({
          streamUid: response.data.result.uid,
          streamThumbnail: response.data.result.thumbnail,
          streamPreview: response.data.result.preview,
          streamHls: response.data.result.playback.hls,
          streamDash: response.data.result.playback.dash,
        })
      })
      .catch(error => {
        console.log(error.response)
        res.status("502").json({message: "Internal Server Error"})
      })

    },
    onAfterResponse: function (req, res) {
      return new Promise(resolve => {
          var mediaIdHeader = res.getHeader("stream-media-id");
          if (mediaIdHeader) {
              mediaId = mediaIdHeader;
          }
          resolve()
      })
    }
  };

  var upload = new tus.Upload(file, options);
  upload.start();
});


export default {
  path: "/api/v1/dashboard/cms/videos",
  handler: app
};