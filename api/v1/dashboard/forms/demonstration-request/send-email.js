import express from "express";
import aws from "aws-sdk";
import sgMail from "@sendgrid/mail";
import { formatDate } from '../../../../../utils/formatDate';
import { htmlToBuffer } from '../../../../../utils/htmlToBuffer';
import axios from 'axios'

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
  <h1>Demonstration Request </h1>
  <h2>Opportunity Details</h2>
    <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
    <div class="word-wrap">${data.cse_label ? `<strong>  Cost Savings Analysis Label: </strong> ${data.cse_label}` : '' }
    </div>
    <div class="word-wrap">
      <strong> Hand Tool or Spindle: </strong> ${data.handToolsOrSpindle === 'spindle' ? 'Spindle' : 'Hand Tool'}
    </div>
    <div class="word-wrap">
      <strong> Opportunity Value: </strong> ${data.value}
    </div>
    <div class="word-wrap">
      <strong> Time to Close (days): </strong> ${data.timeToClose}
    </div>

  <h2>Tooling Details</h2>
    <div class="word-wrap">
      <strong> Cutting Tool Diameter and Type (ex. 0.008 Carbide Drill): </strong> ${data.cuttingTool}
    </div>
    <div class="word-wrap">
      <strong> Material: </strong> ${data.material}
    </div>
  <h2>Current State</h2>
    <div class="word-wrap">
      <strong> Length of Cut (IN): </strong> ${data.currentState.cutLength}
    </div>
    <div class="word-wrap">
      <strong> Depth of Cut (IN): </strong> ${data.currentState.cutDepth}
    </div>
    <div class="word-wrap">
      <strong> Spindle Speed (RPM): </strong> ${data.currentState.spindleSpeed}
    </div>
    <div class="word-wrap">
      <strong> Feed (IPR): </strong> ${data.currentState.feed}
    </div>

    <h2>Future State</h2>
    <div class="word-wrap">
    <strong> Length of Cut (IN): </strong> ${data.futureState.cutLength}
  </div>
  <div class="word-wrap">
    <strong> Depth of Cut (IN): </strong> ${data.futureState.cutDepth}
  </div>
  <div class="word-wrap">
    <strong> Spindle Speed (RPM): </strong> ${data.futureState.spindleSpeed}
  </div>
  <div class="word-wrap">
    <strong> Feed (IPR): </strong> ${data.futureState.feed}
  </div>
  <h2>Additional Details</h2>
  <div class="word-wrap">
    <strong> What will qualify as a successful test?: </strong> ${data.successfulTest}
  </div>
  <div class="word-wrap">
    <strong> Demonstration Date: </strong> ${formatDate(new Date(data.demonstrationDate))}
  </div>
  <table>
    <tr>
        <th>Quantity</th>
        <th>Catalog/Model #</th>
        <th>Description</th>
    </tr>
    ${table}
  </table>

  <h2>Company Information</h2>
  <div class="word-wrap">
    <strong> IMR Company: </strong> ${data.nskSalesRep}
  </div>
  <div class="word-wrap">
    <strong> Name: </strong> ${data.name}
  </div>
  <div class="word-wrap">
    <strong> Email: </strong> ${data.email}
  </div>
  <div class="word-wrap">
    <strong> Date: </strong> ${formatDate(new Date(data.date))}
  </div>
  <div class="word-wrap">
    <strong> Distributor: </strong> ${data.distributorDetails.distributor}
  </div>
  <div class="word-wrap">
    <strong> Distributor Street: </strong> ${data.distributorDetails.street}
  </div>
  <div class="word-wrap">
    <strong> Distributor City, State, Zip Code: </strong> ${data.distributorDetails.cityStateZip}
  </div>
  <div class="word-wrap">
    <strong> Distributor Sales Rep Name: </strong> ${data.distributorDetails.name}
  </div>
  <div class="word-wrap">
    <strong> Distributor Sales Rep Title: </strong> ${data.distributorDetails.title}
  </div>
  <div class="word-wrap">
    <strong> Distributor Sales Rep Email: </strong> ${data.distributorDetails.email}
  </div>
  <div class="word-wrap">
    <strong> End User Company Name: </strong> ${data.endUserCompanyDetails.endUserCompany}
  </div>
  <div class="word-wrap">
    <strong> End User Address: </strong> ${data.endUserCompanyDetails.cityStateZip}
  </div>
  <div class="word-wrap">
    <strong> End User Contact Name: </strong> ${data.endUserCompanyDetails.name}
  </div>
  <div class="word-wrap">
    <strong> End User Contact Title: </strong> ${data.endUserCompanyDetails.title}
  </div>
  <div class="word-wrap">
    <strong> End User Direct Phone Number: </strong> ${data.endUserCompanyDetails.phone}
  </div>
  <div class="word-wrap">
    <strong> End User Email Address: </strong> ${data.endUserCompanyDetails.email}
  </div>
  <div class="word-wrap">
    <strong> Shipping Option: </strong> ${data.shippingOption}
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
app.post("/demonstration-request", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes("localhost");
    const hostname = `${req.secure ? "https://" : "http://"}${
      isDev ? req.headers.host : req.hostname
    }`;
    const form_notification = req.body.form_notification;
    let demonstration_request = req.body.demonstration_request;
    demonstration_request.cse_label = req.body.cse_label

    let table = []
    demonstration_request.productDetails.forEach(product => {
          table.push(`
          <tr>
            <td>${product.quantity}</td>
            <td>${product.catalogOrModel}</td>
            <td>${product.description}</td>
          </tr>
          `)
        })


    const filename = req.body.filename;
    const email = req.body.email;
    const cse_pdf = req.body.cse_pdf;

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    // CD (JE on 20210522): generate buffer from html markup
    const buffer = await htmlToBuffer(
      createHtmlFor(demonstration_request, hostname, table.join(''))
    );

    let attachments = [
      {
        filename,
        content: buffer.toString("base64"),
        type: "application/pdf",
        disposition: "attachment",
        content_id: filename
      }
    ]

    if(cse_pdf){
      attachments.push({
        filename: cse_pdf.filename,
        content: await axios.get(cse_pdf.location, {responseType: 'arraybuffer'}).then((res => Buffer.from(res.data, 'binary').toString('base64'))),
        type: "application/pdf",
        disposition: "attachment",
        content_id: filename
      })
    }

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
      attachments: attachments
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
      attachments: attachments
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
