const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

const toEmail = ({ text: email }) => ({ email });
const formatAddress = address =>
  [address.street, address.city, address.state, address.zip].join(", ");

const htmlFor = repair_return => `
<p>Status updated to ${repair_return.status}</p>
<p>Request type updated to ${repair_return.repairOrReturn}</p>
<p>Form: Repair Return </p>
<dl>
  <div>
  <h3>Contact Information</h3>
  </div>
  <div>
  <dt>
    Form ID
  </dt>
  <dd>
    ${repair_return.formId}
  </dd>
  </div>
  <div>
  <dt>
    Name
  </dt>
  <dd>
    ${repair_return.name}
  </dd>
  </div>
  <div>
  <dt>
    Company
  </dt>
  <dd>
    ${repair_return.company}
  </dd>
  </div>
  <div>
  <dt>
    Email
  </dt>
  <dd>
    ${repair_return.email}
  </dd>
  </div>
  <div>
  <dt>
    Phone
  </dt>
  <dd>
    ${repair_return.phone}
  </dd>
  </div>
  <div>
  <dt>
    Address
  </dt>
  <dd>
    ${formatAddress(repair_return.address)}
  </dd>
  </div>

  <div>
  <h3>Claim Details</h3>
  </div>
  <div>
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
      ${repair_return.claimDetails
        .map(
          data =>
            `<tr>
        <td>${data.productModel}</td>
        <td>${data.serialNumber}</td>
        <td>${data.estimateWarranty}</td>
        <td>${data.issueDescription}</td>
      </tr>`
        )
        .join("")}
    </tbody>
  </table>
  </div>

  <div>
  <h3>Authorized Distributor</h3>
  </div>

  <div>
  <dt>
    Name
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.name}
  </dd>
  </div>

  <div>
  <dt>
    Distributor Branch Location
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.branch}
  </dd>
  </div>

  <div>
  <dt>
    Distributor City, State and Zip Code
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.cityStateZip}
  </dd>
  </div>

  <div>
  <h4>Distributor Company Information</h4>
  </div>
  <div>
  <dt>
    Name
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.distributorContactDetails.name}
  </dd>
  </div>

  <div>
  <dt>
    Email
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.distributorContactDetails.email}
  </dd>
  </div>

  <div>
  <dt>
    Phone
  </dt>
  <dd>
    ${repair_return.authorizedDistributor.distributorContactDetails.phone}
  </dd>
  </div>
</dl>
`;

app.post("/repair-return", async (req, res) => {
  const repair_return = req.body.repair_return;
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
        subject: `Status update for Repair Return - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(repair_return)
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
        subject: `Status update for Repair Return from - ${initial_status} (to User)`
      }
    ],
    from: form_notification.toUser.from, // Change to your verified sender
    html: htmlFor(repair_return)
  };

  try {
    /* CD (JE on 20210513): comment one out of them you can figure it
    out which is which since its descriptive */
    await sgMail.send(emailToUser)
    await sgMail.send(emailToNSK)
    res.status(200).json({ message: "Email sent!" });
  } catch(error) {
    return res
        .status(400)
        .json({ error: "Oops... something went wrong " + error });
  }
})

module.exports = {
  path: "/api/v1/dashboard/send-email",
  handler: app
};
