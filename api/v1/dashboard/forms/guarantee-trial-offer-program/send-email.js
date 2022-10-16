import express from "express";
import aws from "aws-sdk";
import sgMail from "@sendgrid/mail";
import { formatDate } from "../../../../../utils/formatDate";
import { htmlToBuffer } from "../../../../../utils/htmlToBuffer";

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
const createHtmlFor = (data, hostname) => `
  <html DOCTYPE!>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="${hostname}/css/pdf.css" rel="stylesheet" />
    </head>
    <body class="cd-pdfs">
    <h1>Guarantee Trial Offer Program </h1>
    <div class="word-wrap">
      <strong> Form Id: </strong> ${data.formId}
    </div>
    <div class="word-wrap">
      <strong> Test Date: </strong> ${formatDate(new Date(data.testDate))}
    </div>
    <div class="word-wrap">
      <strong> Distributor: </strong> ${data.distributor}
    </div>
    <div class="word-wrap">
      <strong> End User: </strong> ${data.endUser}
    </div>
    <div class="word-wrap">
      <strong> Guarantee: </strong> ${data.guarantee}
    </div>
    <h3>Contact Information</h3>
    <p><strong>Distributor Details</strong></p>
    <div class="word-wrap">
      <strong> Distributor: </strong> ${data.distributorDetails.distributorDetails}
    </div>
    <div class="word-wrap">
      <strong> Distributor Name: </strong> ${data.distributorDetails.name}
    </div>
    <div class="word-wrap">
      <strong> Distributor Title: </strong> ${data.distributorDetails.title}
    </div>
    <div class="word-wrap">
      <strong> Distributor Email: </strong> ${data.distributorDetails.email}
    </div>
    <p><strong>End User Details</strong></p>
    <div class="word-wrap">
      <strong> Distributor End User: </strong> ${data.endUserDetails.endUser}
    </div>
    <div class="word-wrap">
      <strong> End User Name: </strong> ${data.endUserDetails.name}
    </div>
    <div class="word-wrap">
      <strong> End User Title: </strong> ${data.endUserDetails.title}
    </div>
    <div class="word-wrap">
      <strong> End User Phone: </strong> ${data.endUserDetails.phone}
    </div>
    <div class="word-wrap">
      <strong> End User Email: </strong> ${data.endUserDetails.email}
    </div>
    <div class="word-wrap">
      <strong> End User Address: </strong> ${data.endUserDetails.address.street}
    </div>
    <div class="word-wrap">
      <strong> End User Address: </strong> ${data.endUserDetails.address.cityStateZip}
    </div>
`;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());
app.post("/guarantee-trial-offer-program", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes("localhost");
    const hostname = `${req.secure ? "https://" : "http://"}${
      isDev ? req.headers.host : req.hostname
    }`;

    const gtop = req.body.gtop;
    const form_notification = req.body.form_notification;
    const email = req.body.email;
    const filename = req.body.filename;

    // CD (JE on 20210522): generate buffer from html markup
    const buffer = await htmlToBuffer(createHtmlFor(gtop, hostname));

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

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

    /* CD (JE on 20210514): comment one out of them you can figure it
    out which is which since its descriptive */
    await sgMail.send(emailToUser);
    await sgMail.send(emailToNSK);
    // CD (JE on 20210517): upload attachment to DO Spaces
    const uploaded = await space.upload(uploadParams).promise();
    res.status(200).json(uploaded);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

module.exports = {
  path: "/api/v1/dashboard/forms/send-email",
  handler: app
};
