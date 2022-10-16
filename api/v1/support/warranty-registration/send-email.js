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
const createHtmlFor = (data, hostname, table) => `
<html DOCTYPE!>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="${hostname}/css/pdf.css" rel="stylesheet" />
  </head>
  <body class="cd-pdfs">
    <h1>Warranty Registration</h1>
    <h2>Contact Information</h2>
    <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
    <div class="word-wrap">
      <strong>
        Name:
      </strong>
        ${data.name}
    </div>
    <div class="word-wrap">
      <strong>
        Title:
      </strong>
        ${data.title}
    </div>
    <div class="word-wrap">
      <strong>
        Company:
      </strong>
        ${data.company}
    </div>
    <div class="word-wrap">
      <strong>
        Email:
      </strong>
        ${data.email}
    </div>
    <div class="word-wrap">
      <strong>
        Phone:
      </strong>
        ${data.phone}
    </div>
    <h2>Mailing Address</h2>
    <div class="word-wrap">
      <strong>
        Street:
      </strong>
        ${data.mailingAddress.street}
    </div>
    <div class="word-wrap">
      <strong>
        State:
      </strong>
        ${data.mailingAddress.state}
    </div>
    <div class="word-wrap">
      <strong>
        City:
      </strong>
        ${data.mailingAddress.city}
    </div>
    <div class="word-wrap">
      <strong>
        Zip:
      <strongt>
        ${data.mailingAddress.zip}
    </div>
    <div class="word-wrap">
      <strong>
        Country:
      </strong>
        ${data.mailingAddress.country}
    </div>
    <h2>Primary Industries Served</h2>
    <div class="word-wrap">
      <strong>
        Primary Industries Served: 
      </strong>
        ${data.primaryIndustriesServed}
    </div>
    <h2>Product Details</h2>
    <table>
      <tr>
        <th>Order Date</th>
        <th>Model Number</th>
        <th>Description</th>
        <th>Serial Number</th>
        <th>Distributor Purchase From</th>
      </tr>
      ${table}
    </table>
    <div class="word-wrap">
      <strong> Created At: </strong> ${formatDate(new Date(data.createdAt))}
    </div>
    <div class="word-wrap">
      <strong> Updated At: </strong> ${formatDate(new Date(data.updatedAt))}
    </div>
`;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());
app.post("/warranty-registration", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes('localhost')
    const hostname = `${req.secure ? 'https://' : 'http://'}${isDev ? req.headers.host : req.hostname}`

    const form_notification = req.body.form_notification;
    const warranty_registration = req.body.warranty_registration

    let table = []
    warranty_registration.productDetails.forEach(product => {
          table.push(`
          <tr>
            <td>${product.orderDate}</td>
            <td>${product.modelNumber}</td>
            <td>${product.productDescription}</td>
            <td>${product.serialNumber}</td>
            <td>${product.distributorPurchaseForm}</td>
          </tr>
          `)
        })

    const email = req.body.email;
    const filename =req.body.filename

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    // CD (JE on 20210524): create buffer from html markup
    const buffer = await htmlToBuffer(createHtmlFor(warranty_registration, hostname, table.join('')))

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

    // CD (JE on 20210524): upload parameters
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

    // CD (JE on 20210524): upload attachment to DO Spaces
    const uploaded = await space.upload(uploadParams).promise();
    res.status(200).json(uploaded);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

module.exports = {
  path: "/api/v1/support/send-email",
  handler: app
};
