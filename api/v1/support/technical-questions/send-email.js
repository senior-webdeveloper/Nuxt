import express from "express";
import aws from "aws-sdk";
import sgMail from "@sendgrid/mail";
import { htmlToBuffer } from "../../../../utils/htmlToBuffer";
import { formatDate } from "../../../../utils/formatDate";

const app = express();
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

// CD (JE on 20210514): helpers functions
const toEmail = ({ text: email }) => ({ email });

const createHtmlFor = (data,hostname) => `
<html DOCTYPE!>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="${hostname}/css/pdf.css" rel="stylesheet" />
  </head>
  <body class="cd-pdfs">
    <h1>Technical Support Questions</h1>
    <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
    <div class="word-wrap">
      <strong> Name: </strong> ${data.name}
    </div>
    <div class="word-wrap">
      <strong> Title: </strong> ${data.title}
    </div>
    <div class="word-wrap">
      <strong> Company: </strong> ${data.company}
    </div>
    <div class="word-wrap">
      <strong> Email: </strong> ${data.email}
    </div>
    <div class="word-wrap">
      <strong> Phone: </strong> ${data.phone}
    </div>
    <div class="word-wrap">
      <strong> Product: </strong> ${data.product}
    </div>
    <div class="word-wrap">
      <strong> Machine Type: </strong> ${data.machineType}
    </div>
    <div class="word-wrap">
      <strong> Application: </strong> ${data.application}
    </div>
    <div class="word-wrap">
      <strong> Question: </strong> ${data.question}
    </div>
    <div class="word-wrap">
      <strong> Created At: </strong> ${formatDate(new Date(data.createdAt))}
    </div>
    <div class="word-wrap">
      <strong> Updated At: </strong> ${formatDate(new Date(data.updatedAt))}
    </div>
`;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());
app.post("/technical-questions", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes('localhost')
    const hostname = `${req.secure ? 'https://' : 'http://'}${isDev ? req.headers.host : req.hostname}`

    const form_notification = req.body.form_notification
    const technical_questions = req.body.technical_questions
    const filename = req.body.filename
    const email = req.body.technical_questions.email

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    const buffer = await htmlToBuffer(createHtmlFor(technical_questions, hostname))

    // CD (JE on 20210511): to nsk email config
    const emailToNSK = {
      personalizations: [
        {
          to: [{ email: form_notification.toNsk.to }],
          bcc: ccToNSK,
          cc: bccToNSK,
          subject: form_notification.toNsk.emailContent.subject
        }
      ],
      from: form_notification.toNsk.from, // Change to your verified sender
      text: form_notification.toNsk.emailContent.body,
      attachments: [
        {
          filename,
          content: buffer.toString("base64"),
          type: "application/pdf",
          disposition: "attachment",
          content_id: filename
        }
      ]
    };

    // CD (JE on 20210511): to user email config
    const emailToUser = {
      personalizations: [
        {
          to: [
            {
              email: email
            }
          ],
          cc: ccToUser,
          bcc: bccToUser,
          subject: form_notification.toUser.emailContent.subject
        }
      ],
      from: form_notification.toUser.from, // Change to your verified sender
      text: form_notification.toUser.emailContent.body,
      attachments: [
        {
          filename,
          content: buffer.toString("base64"),
          type: "application/pdf",
          disposition: "attachment",
          content_id: filename
        }
      ]
    };

    // CD (JE on 20210517): upload parameters
    const uploadParams = {
      Bucket: bucket,
      Body: buffer,
      ACL: "public-read",
      Key: `form-data/${filename}`
    };

    /* CD (JE on 20210514): send email */
    await sgMail.send(emailToUser);
    await sgMail.send(emailToNSK);
    // CD (JE on 20210520): upload attachment to DO Spaces
    const uploaded = await space.upload(uploadParams).promise();
    res.status(200).json(uploaded);
  } catch (error) {
    console.error(error)
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

export default {
  path: "/api/v1/support/send-email",
  handler: app
};
