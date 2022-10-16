const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helper functions
const toEmail = ({ text: email }) => ({ email });
const formatDistributor = value => {
  const types = ["Manufacturing", "Woodworking", "Jewelry", "Machine Tools"];
  return Object.values(value)
    .map((selected, i) => (selected === true ? types[i] : false))
    .filter(Boolean)
    .join(", ");
};
const htmlFor = data => `
<p>Status updated to ${data.status}</p>
<p>Approved updated to ${data.approved}</p>
<p>Form: Distributorship Application </p>
<dl>
  <div>
    <div>
      <h3><strong>Company Information</strong></h3>
    </div>
    <div>
      <dt>Form ID</dt>
      <dd>${data.formId}</dd>
    </div>
    <div>
      <dt>Application Date</dt>
      <dd>${data.companyInformation.createdAt}</dd>
    </div>
    <div>
      <dt>Legal Name</dt>
      <dd>${data.companyInformation.legalName}</dd>
    </div>
    <div>
      <dt>Address</dt>
      <dd>${data.companyInformation.address}</dd>
    </div>
    <div>
      <dt>Phone</dt>
      <dd>${data.companyInformation.phone}</dd>
    </div>
    <div>
      <dt>Name and Title</dt>
      <dd>${data.companyInformation.principalContact.nameAndTitle}</dd>
    </div>
    <div>
      <dt>Phone</dt>
      <dd>${data.companyInformation.principalContact.phone}</dd>
    </div>
    <div>
      <dt>Email</dt>
      <dd>${data.companyInformation.principalContact.email}</dd>
    </div>
    <div>
      <dt>Name and Title Officers and Owners</dt>
      <dd>${data.companyInformation.nameAndTitleOfficersOrOwners}</dd>
    </div>
    <div>
      <dt>Legal Name and Address Headquarters Parent Company</dt>
      <dd>${data.companyInformation.legalNameAndAddressHeadquartersParentCompany}</dd>
    </div>
    <div>
      <dt>Geographic Concentration</dt>
      <dd>${data.companyInformation.geographicConcentration}</dd>
    </div>
    <div>
      <dt>Primary Industries Served</dt>
      <dd>${data.companyInformation.primaryIndustriesServed}</dd>
    </div>
    <div>
      <dt>Primary Product Lines Distributed</dt>
      <dd>${data.companyInformation.primaryProductLinesDistributed}</dd>
    </div>
    <div>
      <dt>Distributor type</dt>
      <dd>${formatDistributor(data.companyInformation.distributorType)}</dd>
    </div>
  </div>
  <div>
    <div>
      <h3><strong>Sales Information</strong></h3>
    </div>
    <div>
      <dt>What CRM do you use?</dt>
      <dd>${data.salesInformation.crm}</dd>
    </div>
    <div>
      <dt>How do you track sales opportunities? </dt>
      <dd>${data.salesInformation.trackSalesOpportunites}</dd>
    </div>
    <div>
      <dt>How do you show value? </dt>
      <dd>${data.salesInformation.showValue}</dd>
    </div>
    <div>
      <dt>How do you track success stories?</dt>
      <dd>${data.salesInformation.trackSuccessStories}</dd>
    </div>
    <div>
      <dt>What is your annual sales commitment to NSK?</dt>
      <dd>${data.salesInformation.annualSalesCommitment}</dd>
    </div>
    <div>
      <dt>What percentage of sales is metalworking?</dt>
      <dd>${data.salesInformation.percentageSalesMetalworking}</dd>
    </div>
    <div>
      <dt>Do you require cost savings tracking of your salespeople?</dt>
      <dd>${data.salesInformation.costSavingsTracking ? 'Yes' : 'No'}</dd>
    </div>
    <div>
      <dt>Will NSK be allowed to make joint sales calls with your personnel?</dt>
      <dd>${data.salesInformation.jointSalesCalls ? 'Yes' : 'No'}</dd>
    </div>
    <div>
      <dt>Are you interested in joint marketing success stories?</dt>
      <dd>${data.salesInformation.jointMarketingSuccessStories ? 'Yes' : 'No'}</dd>
    </div>
  </div>
  <div>
    <div>
      <h3><strong>Sales Representation</strong></h3>
    </div>
    <div>
      <dt>Quantity outside sales</dt>
      <dd>${data.salesRepresentation.quantityOutsideSales}</dd>
    </div>
    <div>
      <dt>Quantity inside sales</dt>
      <dd>${data.salesRepresentation.quantityOutsideSales}</dd>
    </div>
    <div>
      <dt>Sales Details</dt>
      <dd>${JSON.stringify(data.salesRepresentation.salesDetails, undefined, 4)}</dd>
    </div>
  </div>




  <div>
    <div>
      <h3>Credit Information</h3>
      <h3><strong>Company Information</strong></h3>
    </div>
    <div>
      <dt>Company Legal Name and d/b/a</dt>
      <dd>${data.creditInformation.companyInformation.legalName}</dd>
    </div>
    <div>
      <dt>Company Address</dt>
      <dd>${data.creditInformation.companyInformation.address}</dd>
    </div>
    <div>
      <dt>Company Website</dt>
      <dd>${data.creditInformation.companyInformation.website}</dd>
    </div>
    <div>
      <dt>AP Contact Name</dt>
      <dd>${data.creditInformation.companyInformation.apContact.name}</dd>
    </div>
    <div>
      <dt>AP Contact Phone</dt>
      <dd>${data.creditInformation.companyInformation.apContact.phone}</dd>
    </div>
    <div>
      <dt>AP Contact Email</dt>
      <dd>${data.creditInformation.companyInformation.apContact.email}</dd>
    </div>
    <div>
      <dt>Names and Titles of Officers and Owners</dt>
      <dd>${data.creditInformation.companyInformation.apContact.nameAndTitleOfficersOrOwners}</dd>
    </div>
    <div>
      <dt>Legal Name and Address of Headquarters or Parent Company</dt>
      <dd>${data.creditInformation.companyInformation.legalNameAndAddressHeadquartersParentCompany}</dd>
    </div>
    <div>
      <dt>Credit Line Requested</dt>
      <dd>${data.creditInformation.companyInformation.creditLineRequested}</dd>
    </div>
    <div>
      <dt>Amount Requested</dt>
      <dd>${data.creditInformation.companyInformation.amountRequested}</dd>
    </div>
    <div>
      <dt>Existing Customer</dt>
      <dd>${data.creditInformation.companyInformation.isExistingCustomer}</dd>
    </div>
    <div>
      <dt>Federal ID</dt>
      <dd>${data.creditInformation.companyInformation.federalId}</dd>
    </div>
    <div>
      <dt>DUNS ID</dt>
      <dd>${data.creditInformation.companyInformation.dunsId}</dd>
    </div>
    <div>
      <dt>Years In Business</dt>
      <dd>${data.creditInformation.companyInformation.yearsInBusiness}</dd>
    </div>
    <div>
      <dt>Description Of Business</dt>
      <dd>${data.creditInformation.companyInformation.descriptionOfBusiness}</dd>
    </div>
    <div>
      <dt>Type of Company</dt>
      <dd>${                       
      data.creditInformation.companyInformation.companyType.isCorporation ? 'Corporation, ' : '' +
      data.creditInformation.companyInformation.companyType.isLLC ? 'LLC, ' : '' +
      data.creditInformation.companyInformation.companyType.isPartnership ? 'Partnership, ' : '' +
      data.creditInformation.companyInformation.companyType.isSoleProprietorship ? 'Sole Proprietorship, ' : '' +
      data.creditInformation.companyInformation.companyType.isNonProfit ? 'Non Profit, ' : '' +
      data.creditInformation.companyInformation.companyType.isPrivatelyHeld ? 'Privately Held, ' : '' +
      data.creditInformation.companyInformation.companyType.isPubliclyTraded ? 'Publicly Traded, ' : '' +
      data.creditInformation.companyInformation.companyType.isOther ? data.creditInformation.companyInformation.ifOther : ''
    }</dd>
    </div>
    <h3><strong>Address Information</strong></h3>
    <div>
      <dt>Invoice Biling Address</dt>
      <dd>${data.creditInformation.addressInformation.invoiceBillingAddress}</dd>
    </div>
    <div>
      <dt>Preferred Method of Invoice Submission</dt>
      <dd>
        ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail ? 'Email' : ''}
        ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isEmail && data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'and' : ''}
        ${data.creditInformation.addressInformation.preferredMethodInvoiceSubmission.isMailToPhysicalAddress ? 'Mail To Phisical Address' : ''}
      </dd>
    </div>
    <div>
      <dt>Email Addresses</dt>
      <dd>${data.creditInformation.addressInformation.email}</dd>
    </div>
    <div>
      <dt>Primary Ship to Address</dt>
      <dd>${data.creditInformation.addressInformation.primaryShipToAddress}</dd>
    </div>
    <div>
      <dt>Preferred Shipping Company</dt>
      <dd>${data.creditInformation.addressInformation.preferredShippingCompany}</dd>
    </div>
    <div>
      <dt>Preferred Shipping Company Account Number</dt>
      <dd>${data.creditInformation.addressInformation.preferredShippingCompanyAccountNumber}</dd>
    </div>
    <div>
      <dt>Additional Ship to Addresses</dt>
      <dd>${data.creditInformation.addressInformation.additionalShipToAddress}</dd>
    </div>
    <div>
      <dt>Exempt from Sales and Use Tax</dt>
      <dd>${data.creditInformation.addressInformation.isExemptFromSalesAndUseTax}</dd>
    </div>
    <div>
      <dt>States Exempt In</dt>
      <dd>${data.creditInformation.addressInformation.statesExemptIn}</dd>
    </div>
    ${data.creditInformation.referenceInformation.bankReference.bankName ? `
    <h3>Reference Information</h3>
    <h3><strong>Bank Reference</strong></h3>
    <div>
      <dt>Bank Name</dt>
      <dd>${data.creditInformation.referenceInformation.bankReference.bankName}</dd>
    </div>
    <div>
      <dt>Bank Contact Name</dt>
      <dd>${data.creditInformation.referenceInformation.bankReference.bankContactName}</dd>
    </div>
    <div>
      <dt>Bank Direct Phone Number</dt>
      <dd>${data.creditInformation.referenceInformation.bankReference.bankDirectPhone}</dd>
    </div>
    <div>
      <dt>Trade Reference</dt>
      <dd>
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
      </dd>
    </div>
    <div>
      <dt>Print Name and Title</dt>
      <dd>${data.creditInformation.referenceInformation.tradeReference.nameAuthorizedRepresentative}</dd>
    </div>
    <div>
      <dt>Title of Authorized Representative</dt>
      <dd>${data.creditInformation.referenceInformation.tradeReference.titleAuthorizedRepresentative}</dd>
    </div>
    <div>
      <dt>Company Legal Name</dt>
      <dd>${data.creditInformation.referenceInformation.tradeReference.CompanyLegalName}</dd>
    </div>
    ` : ''}
    <p>Login to the NSK dashboard to download or see the attached files</p>
  </div>
</dl>

`;

app.post("/distributorship-application", async (req, res) => {
  const distributorship_application = req.body.distributorship_application;
  const initial_status = req.body.initial_status;
  const form_notification = req.body.form_notification;
  const email = req.body.email;

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
        subject: `Status update for Distributorship Application - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(distributorship_application)
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
        subject: `Status update for Distributorship Application from - ${initial_status} (to User)`
      }
    ],
    from: form_notification.toUser.from, // Change to your verified sender
    html: htmlFor(distributorship_application)
  };

  try {
    /* CD (JE on 20210513): comment one out of them you can figure it
    out which is which since its descriptive */
    await sgMail.send(emailToUser);
    await sgMail.send(emailToNSK);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

module.exports = {
  path: "/api/v1/dashboard/send-email",
  handler: app
};
