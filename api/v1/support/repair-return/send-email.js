import express from "express";
import aws from "aws-sdk";
import sgMail from "@sendgrid/mail";
import { htmlToBuffer } from "../../../../utils/htmlToBuffer";

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
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CD (JE on 20210514): helpers functions
const toEmail = ({ text: email }) => ({ email });
const formatAddress = address =>
  [address.street, address.city, address.state, address.zip].join(", ");
const createHtmlFor = (data, hostname) => `
  <html DOCTYPE!>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="${hostname}/css/pdf.css" rel="stylesheet" />
  </head>
  <body class="cd-pdfs">
    <h1>Repair / Return</h1>
    <h2>Contact Information</h2>
    <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
    <div class="word-wrap">
      <strong> Name: </strong> ${data.name}
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
      <strong> Address: </strong> ${formatAddress(data.address)}
    </div>

    <h2>Claim Details</h2>
    <table>
      <thead>
        <tr>
          <th>Product Model</th>
          <th>Serial Number</th>
          <th>Estimate Warranty</th>
          <th>Issue Description</th>
        </tr>
      </thead>
      <tbody>
      ${data.claimDetails
        .map(
          detail => `
        <tr>
            <td>${detail.productModel}</td>
            <td>${detail.serialNumber}</td>
            <td>${detail.estimateWarranty}</td>
            <td>${detail.issueDescription}</td>
          </tr>
      `
        )
        .join("")}
      </tbody>
    </table>

    <h2>Distributor Contact Information</h2>
    <div class="word-wrap">
      <strong> NSK Authorized Distributor: </strong> ${data.authorizedDistributor.name}
    </div>
    <div class="word-wrap">
      <strong> Distributor Branch Location: </strong> ${data.authorizedDistributor.branch}
    </div>
    <div class="word-wrap">
      <strong> Distributor City, State and Zip Code: </strong> ${data.authorizedDistributor.cityStateZip}
    </div>
    <div class="word-wrap">
      <h4>Distributor Company Information</h4>
    </div>
    <div class="word-wrap">
      <strong> Distributor Contact Name: </strong> ${
        data.authorizedDistributor.distributorContactDetails.name
      }
    </div>
    <div class="word-wrap">
      <strong> Distributor Contact Email: </strong> ${
        data.authorizedDistributor.distributorContactDetails.email
      }
    </div>
    <div class="word-wrap">
      <strong> Distributor Contact Direct Phone Number: </strong> ${
        data.authorizedDistributor.distributorContactDetails.phone
      }
    </div>
`;

const app = express();
app.use(express.json());

app.post("/repair-return", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes("localhost");
    const hostname = `${req.secure ? "https://" : "http://"}${
      isDev ? req.headers.host : req.hostname
    }`;
    const form_notification = req.body.form_notification;
    const repair_return = req.body.repair_return;
    const filename = req.body.filename;
    const email = req.body.email;

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    // CD (JE on 20210511): create pdf buffer from html
    const buffer = await htmlToBuffer(createHtmlFor(repair_return, hostname));

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
          subject: form_notification.toUser.emailContent.subject,
          attachments: [
            {
              filename,
              content: buffer.toString("base64"),
              type: "application/pdf",
              disposition: "attachment",
              content_id: filename
            }
          ]
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

    // CD (JE on 20210525): upload parameters
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
  path: "/api/v1/support/send-email",
  handler: app
};
