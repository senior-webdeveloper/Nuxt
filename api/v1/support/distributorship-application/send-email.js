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

const formatDistributor = value => {
  const types = ["Manufacturing", "Woodworking", "Jewelry", "Machine Tools"];
  return Object.values(value)
    .map((selected, i) => (selected === true ? types[i] : false))
    .filter(Boolean)
    .join(", ");
};

const createHtmlFor = (data, hostname) => `
<html DOCTYPE!>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="${hostname}/css/pdf.css" rel="stylesheet" />
  </head>
  <body class="cd-pdfs">
    <h1>Distributorship Application </h1>
    <h2>Company Information</h2>
    <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
    <div class="word-wrap">
      <strong> Application Date: </strong> ${(new Date(data.createdAt)).toLocaleString()}
    </div>
    <div class="word-wrap">
      <strong> Legal Name: </strong> ${data.companyInformation.legalName}
    </div>
    <div class="word-wrap">
      <strong> Address: </strong> ${data.companyInformation.address}
    </div>
    <div class="word-wrap">
      <strong> Phone: </strong> ${data.companyInformation.phone}
    </div>
    <div class="word-wrap">
      <strong> Name and Title Officers and Owners: </strong> ${data.companyInformation.nameAndTitleOfficersOrOwners}
    </div>
    <div class="word-wrap">
      <strong> Legal Name and Address Headquarters Parent Company: </strong> ${data.companyInformation.legalNameAndAddressHeadquartersParentCompany}
    </div>
    <div class="word-wrap">
      <strong> Geographic Concentration: </strong> ${data.companyInformation.geographicConcentration}
    </div>
    <div class="word-wrap">
      <strong> Primary Industries Served: </strong> ${data.companyInformation.primaryIndustriesServed}
    </div>
    <div class="word-wrap">
      <strong> Primary Product Lines Distributed: </strong> ${data.companyInformation.primaryProductLinesDistributed}
    </div>
    <div class="word-wrap">
      <strong> Distributor type: </strong> ${formatDistributor(data.companyInformation.distributorType)}
    </div>
    <div class="word-wrap">
      <strong> Principal Contact Name and Title: </strong> ${data.companyInformation.principalContact.nameAndTitle}
    </div>
    <div class="word-wrap">
      <strong> Principal Contact Phone Number: </strong> ${data.companyInformation.principalContact.phone}
    </div>
    <div class="word-wrap">
      <strong> Principal Contact Email : </strong> ${data.companyInformation.principalContact.email}
    </div>
    <h2>Sales Information</h2>
    <div class="word-wrap">
      <strong> What CRM do you use?: </strong> ${data.salesInformation.crm}
    </div>
    <div class="word-wrap">
      <strong> How do you track sales opportunities?: </strong> ${data.salesInformation.trackSalesOpportunites}
    </div>
    <div class="word-wrap">
      <strong> How do you show value?: </strong> ${data.salesInformation.showValue}
    </div>
    <div class="word-wrap">
      <strong> How do you track success stories?: </strong> ${data.salesInformation.trackSuccessStories}
    </div>
    <div class="word-wrap">
      <strong> What is your annual sales commitment to NSK?: </strong> ${data.salesInformation.annualSalesCommitment}
    </div>
    <div class="word-wrap">
      <strong> What percentage of sales is metalworking?: </strong> ${data.salesInformation.percentageSalesMetalworking}
    </div>
    <div class="word-wrap">
      <strong> Do you require cost savings tracking of your salespeople?: </strong> ${data.salesInformation.costSavingsTracking ? 'Yes' : 'No'}
    </div>
    <div class="word-wrap">
      <strong> Will NSK be allowed to make joint sales calls with your personnel?: </strong> ${data.salesInformation.jointSalesCalls ? 'Yes' : 'No'}
    </div>
    <div class="word-wrap">
      <strong> Are you interested in joint marketing success stories?: </strong> ${data.salesInformation.jointMarketingSuccessStories ? 'Yes' : 'No'}
    </div>
    <h2>Sales Representation</h2>
    <div class="word-wrap">
      <strong> Quantity outside sales: </strong> ${data.salesRepresentation.quantityOutsideSales}
    </div>
    <div class="word-wrap">
      <strong> Quantity inside sales: </strong> ${data.salesRepresentation.quantityOutsideSales}
    </div>
    <h2>Sales Details</h2>
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
      ${data.salesRepresentation.salesDetails
        .map(
          detail => `
        <tr>
            <td>${detail.name}</td>
            <td>${detail.title}</td>
            <td>${detail.email}</td>
            <td>${detail.phone}</td>
          </tr>
      `
        )
        .join("")}
      </tbody>
    </table>
    <h2>Credit Information</h2>
    <h3>Company Information</h3>
    <div class="word-wrap">
      <strong> Company Legal Name and d/b/a: </strong> ${data.creditInformation.companyInformation.legalName}
    </div>
    <div class="word-wrap">
      <strong> Company Address: </strong> ${data.creditInformation.companyInformation.address}
    </div>
    <div class="word-wrap">
      <strong> Company Website: </strong> ${data.creditInformation.companyInformation.website}
    </div>
    <div class="word-wrap">
      <strong> AP Contact Name: </strong> ${data.creditInformation.companyInformation.apContact.name}
    </div>
    <div class="word-wrap">
      <strong> AP Contact Phone: </strong> ${data.creditInformation.companyInformation.apContact.phone}
    </div>
    <div class="word-wrap">
      <strong> AP Contact Email: </strong> ${data.creditInformation.companyInformation.apContact.email}
    </div>
    <div class="word-wrap">
      <strong> Names and Titles of Officers and Owners: </strong> ${data.creditInformation.companyInformation.apContact.nameAndTitleOfficersOrOwners}
    </div>
    <div class="word-wrap">
      <strong> Legal Name and Address of Headquarters or Parent Company: </strong> ${data.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany}
    </div>
    <div class="word-wrap">
      <strong> Credit Line Requested: </strong> ${data.creditInformation.companyInformation.creditLineRequested}
    </div>
    <div class="word-wrap">
      <strong> Amount Requested: </strong> ${data.creditInformation.companyInformation.amountRequested}
    </div>
    <div class="word-wrap">
      <strong> Existing Customer: </strong> ${data.creditInformation.companyInformation.isExistingCustomer}
    </div>
    <div class="word-wrap">
      <strong> Federal ID: </strong> ${data.creditInformation.companyInformation.federalId}
    </div>
    <div class="word-wrap">
      <strong> DUNS ID: </strong> ${data.creditInformation.companyInformation.dunsId}
    </div>
    <div class="word-wrap">
      <strong> Years In Business: </strong> ${data.creditInformation.companyInformation.yearsInBusiness}
    </div>
    <div class="word-wrap">
      <strong> Description Of Business: </strong> ${data.creditInformation.companyInformation.descriptionOfBusiness}
    </div>
    <div class="word-wrap">
      <strong> Type of Company: </strong> ${                       
      (data.creditInformation.companyInformation.companyType.isCorporation ? 'Corporation, ' : '') +
      (data.creditInformation.companyInformation.companyType.isLLC ? 'LLC, ' : '') +
      (data.creditInformation.companyInformation.companyType.isPartnership ? 'Partnership, ' : '') +
      (data.creditInformation.companyInformation.companyType.isSoleProprietorship ? 'Sole Proprietorship, ' : '') +
      (data.creditInformation.companyInformation.companyType.isNonProfit ? 'Non Profit, ' : '') +
      (data.creditInformation.companyInformation.companyType.isPrivatelyHeld ? 'Privately Held, ' : '') +
      (data.creditInformation.companyInformation.companyType.isPubliclyTraded ? 'Publicly Traded, ' : '') +
      (data.creditInformation.companyInformation.companyType.isOther ? data.creditInformation.companyInformation.ifOther : '')
    }
    </div>
    <h3>Address Information</h3>
    <div class="word-wrap">
      <strong> Invoice Biling Address: </strong> ${data.creditInformation.addressInformation.invoiceBillingAddress}
    </div>
    <div class="word-wrap">
      <strong> Preferred Method of Invoice Submission: </strong>
      ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail ? 'Email' : ''}
      ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail && data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'and' : ''}
      ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'Mail To Phisical Address' : ''}
    </div>
    <div class="word-wrap">
      <strong> Email Addresses: </strong> ${data.creditInformation.addressInformation.email}
    </div>
    <div class="word-wrap">
      <strong> Primary Ship to Address : </strong> ${data.creditInformation.addressInformation.primaryShipToAddress}
    </div>
    <div class="word-wrap">
      <strong> Preferred Shipping Company: </strong> ${data.creditInformation.addressInformation.preferredShippingCompany}
    </div>
    <div class="word-wrap">
      <strong> Preferred Shipping Company Account Number: </strong> ${data.creditInformation.addressInformation.preferredShippingCompanyAccountNumber}
    </div>
    <div class="word-wrap">
      <strong> Additional Ship to Addresses: </strong> ${data.creditInformation.addressInformation.additionalShipToAddress}
    </div>
    <div class="word-wrap">
      <strong> Exempt from Sales and Use Tax: </strong> ${data.creditInformation.addressInformation.isExemptFromSalesAndUseTax}
    </div>
    <div class="word-wrap">
      <strong> States Exempt In: </strong> ${data.creditInformation.addressInformation.statesExemptIn}
    </div>
    <h3>Reference Information</h3>
    ${ data.creditInformation.referenceInformation.bankReference.bankName ? `
    <h4>Bank Reference</h4>
    <div class="word-wrap">
      <strong> Bank Name: </strong> ${data.creditInformation.referenceInformation.bankReference.bankName}
    </div>
    <div class="word-wrap">
      <strong> Bank Contact Name: </strong> ${data.creditInformation.referenceInformation.bankReference.bankContactName}
    </div>
    <div class="word-wrap">
      <strong> Bank Direct Phone Number: </strong> ${data.creditInformation.referenceInformation.bankReference.bankDirectPhone}
    </div>
    <h4>Trade Reference</h4>
    <table>
      <thead>
        <tr>
          <th>Company Legal Name</th>
          <th>Phone</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
      ${data.creditInformation.referenceInformation.tradeReference.companyDetails
        .map(
          detail => `
        <tr>
            <td>${detail.companyLegalName}</td>
            <td>${detail.phone}</td>
            <td>${detail.email}</td>
          </tr>
      `
        )
        .join("")}
      </tbody>
    </table>
    <div class="word-wrap">
      <strong> Print Name and Title: </strong> ${data.creditInformation.referenceInformation.tradeReference.nameAuthorizedRepresentative}
    </div>
    <div class="word-wrap">
      <strong> Title of Authorized Representative: </strong> ${data.creditInformation.referenceInformation.tradeReference.titleAuthorizedRepresentative}
    </div>
    <div class="word-wrap">
      <strong> Company Legal Name: </strong> ${data.creditInformation.referenceInformation.tradeReference.CompanyLegalName}
    </div>
    ` : ''}
    <h2>Login to the NSK dashboard to download or see the attached files</h2>
`;

const app = express();
app.use(express.json());
app.post("/distributorship-application", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes("localhost");
    const hostname = `${req.secure ? "https://" : "http://"}${
      isDev ? req.headers.host : req.hostname
    }`;
    const form_notification = req.body.form_notification;
    const email = req.body.email;
    const distributorship_application = req.body.distributorship_application;
    const filename = req.body.filename;

    // CD (JE on 20210513): to user cc and bcc
    const ccToUser = form_notification.toUser.cc.map(toEmail);
    const bccToUser = form_notification.toUser.bcc.map(toEmail);

    // CD (JE on 20210511): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    // CD (JE on 20210511): create pdf buffer from html
    const buffer = await htmlToBuffer(createHtmlFor(distributorship_application, hostname));

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
