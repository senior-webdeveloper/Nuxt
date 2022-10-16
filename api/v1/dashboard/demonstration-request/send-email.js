const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helper functions
const toEmail = ({ text: email }) => ({ email });

const htmlFor = data => `
<p>Status updated to ${data.status}</p>
<p>Form: Demonstration Request </p>
  <div>
    <h2 id="opportunity-details">Opportunity Details</h2>
  </div>
  <div class="word-wrap">
      <strong> Form ID: </strong> ${data.formId}
    </div>
  <dl>
    <div>
      <dt>Form ID</dt>
      <dd>${data.formId}</dd>
    </div>
    <div>
      <dt>Hand Tool or Spindle</dt>
      <dd>${data.handToolsOrSpindle === 'spindle' ? 'Spindle' : 'Hand Tool'}</dd>
    </div>
    <div>
      <dt>Opportunity Value</dt>
      <dd>${data.value}</dd>
    </div>
    <div>
      <dt>Time to Close (days)</dt>
      <dd>${data.timeToClose}</dd>
    </div>
  </dl>

  <div>
    <h2 id="tooling-details">Tooling Details</h2>
  </div>
  <dl>
    <div>
      <dt>Cutting Tool Diameter and Type (ex. 0.008 Carbide Drill)</dt>
      <dd>${data.cuttingTool}</dd>
    </div>
    <div>
      <dt>Material</dt>
      <dd>${data.material}</dd>
    </div>
  </dl>

  <div>
    <h2 id="current-state">Current State</h2>
  </div>
  <dl>
    <div>
      <dt>Length of Cut (IN)</dt>
      <dd>${data.currentState.cutLength}</dd>
    </div>
    <div>
      <dt>Depth of Cut (IN)</dt>
      <dd>${data.currentState.cutDepth}</dd>
    </div>
    <div>
      <dt>Spindle Speed (RPM)</dt>
      <dd>${data.currentState.spindleSpeed}</dd>
    </div>
    <div>
      <dt>Feed (IPR)</dt>
      <dd>${data.currentState.feed}</dd>
    </div>
  </dl>

  <div>
    <h2 id="future-state">Future State</h2>
  </div>
  <dl>
    <div>
      <dt>Length of Cut (IN)</dt>
      <dd>${data.futureState.cutLength}</dd>
    </div>
    <div>
      <dt>Depth of Cut (IN)</dt>
      <dd>${data.futureState.cutDepth}</dd>
    </div>
    <div>
      <dt>Spindle Speed (RPM)</dt>
      <dd>${data.futureState.spindleSpeed}</dd>
    </div>
    <div>
      <dt>Feed (IPR)</dt>
      <dd>${data.futureState.feed}</dd>
    </div>
  </dl>

  <div>
    <h2 id="additional-details">Additional Details</h2>
  </div>
  <dl>
    <div>
      <dt>What will qualify as a successful test?</dt>
      <dd>${data.successfulTest}</dd>
    </div>
    <div>
      <dt>Demonstration Date</dt>
      <dd>${data.demonstrationDate}</dd>
    </div>
  </dl>

  <table>
    <thead>
      <tr>  <th>Quantity</th>  <th>Catalog/Model #</th>  <th>Description</th>
      </tr>
    </thead>
    <tbody>
    ${data.productDetails
      .map(productDetail => `
      <td>${productDetail.quantity}
      </td>
      <td>${productDetail.catalogOrModel}
      </td>
      <td>${productDetail.description}
      </td>
    `
      )
      .join("")}
    </tbody>
  </table>

  <div>
    <h3 id="company-information">Company Information</h3>
  </div>
  <dl>
    <div>
      <dt>IMR Company</dt>
      <dd>${data.nskSalesRep}</dd>
    </div>
    <div>
      <dt>Name</dt>
      <dd>${data.name}</dd>
    </div>
    <div>
      <dt>Email</dt>
      <dd>${data.email}</dd>
    </div>
  </dl>

  <dl>
    <div>
      <dt>Distributor</dt>
      <dd>${data.distributorDetails.distributor}</dd>
    </div>
    <div>
      <dt>Distributor Street</dt>
      <dd>${data.distributorDetails.street}</dd>
    </div>
    <div>
      <dt>Distributor City, State, Zip Code</dt>
      <dd>${data.distributorDetails.cityStateZip}</dd>
    </div>
    <div>
      <dt>Distributor Sales Rep Name</dt>
      <dd>${data.distributorDetails.name}</dd>
    </div>
    <div>
      <dt>Distributor Sales Rep Title</dt>
      <dd>${data.distributorDetails.title}</dd>
    </div>
    <div>
      <dt>Distributor Sales Rep Email</dt>
      <dd>${data.distributorDetails.email}</dd>
    </div>
  </dl>

  <dl>
    <div>
      <dt>End User Company Name</dt>
      <dd>${data.endUserCompanyDetails.endUserCompany}</dd>
    </div>
    <div>
      <dt>End User Address</dt>
      <dd>${data.endUserCompanyDetails.cityStateZip}</dd>
    </div>
    <div>
      <dt>End User Contact Name</dt>
      <dd>${data.endUserCompanyDetails.name}</dd>
    </div>
    <div>
      <dt>End User Contact Title</dt>
      <dd>${data.endUserCompanyDetails.title}</dd>
    </div>
    <div>
      <dt>End User Direct Phone Number</dt>
      <dd>${data.endUserCompanyDetails.phone}</dd>
    </div>
    <div>
      <dt>End User Email Address</dt>
      <dd>${data.endUserCompanyDetails.email}</dd>
    </div>
    <div>
      <dt>Shipping Option</dt>
      <dd>${data.shippingOption}</dd>
    </div>
  </dl>
`;

app.post("/demonstration-request", async (req, res) => {
  const demonstration_request = req.body.demonstration_request;
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
      {to: [{ email: form_notification.toNsk.to }],bcc: ccToNSK,cc: bccToNSK,subject: `Status update for Demonstration Request - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(demonstration_request)
  };

  // CD (JE on 20210511): to user email config
  const emailToUser = {
    personalizations: [
      {to: [  {    email: email  }],cc: ccToUser,bcc: bccToUser,subject: `Status update for Demonstration Request from - ${initial_status} (to User)`
      }
    ],
    from: form_notification.toUser.from, // Change to your verified sender
    html: htmlFor(demonstration_request)
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
