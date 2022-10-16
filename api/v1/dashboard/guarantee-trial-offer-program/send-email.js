const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helper functions
const toEmail = ({text: email}) => ({email})
const htmlFor = data => `
<p>Status updated to ${data.status}</p>
<p>Approved updated to ${data.approved}</p>
<p>Form: Guarantee Trial Offer Program </p>
<dl>
  <div>
    <div>
      <dt>Form ID</dt>
      <dd>${data.formId}</dd>
    </div>
    <div>
      <dt>Test Date</dt>
      <dd>${data.testDate}</dd>
    </div>
    <div>
      <dt>Distributor</dt>
      <dd>${data.distributor}</dd>
    </div>
    <div>
      <dt>End User</dt>
      <dd>${data.endUser}</dd>
    </div>
    <div>
      <dt>Guarantee</dt>
      <dd>${data.guarantee}</dd>
    </div>
  </div>
  <div>
    <h3>Contact Information</h3>
  </div>
  <div>
    <div>
      <p><strong>Distributor Details</strong></p>
    </div>
    <div>
      <dt>Distributor</dt>
      <dd>${data.distributorDetails.distributorDetails}</dd>
    </div>
    <div>
      <dt>Distributor Name</dt>
      <dd>${data.distributorDetails.name}</dd>
    </div>
    <div>
      <dt>Distributor Title</dt>
      <dd>${data.distributorDetails.title}</dd>
    </div>
    <div>
      <dt>Distributor Email</dt>
      <dd>${data.distributorDetails.email}</dd>
    </div>
  </div>
  <div>
    <div>
      <p><strong>End User Details</strong></p>
    </div>
    <div>
      <dt>End User</dt>
      <dd>${data.endUserDetails.endUser}</dd>
    </div>
    <div>
      <dt>End User Name</dt>
      <dd>${data.endUserDetails.name}</dd>
    </div>
    <div>
      <dt>End User Title</dt>
      <dd>${data.endUserDetails.title}</dd>
    </div>
    <div>
      <dt>End User Phone</dt>
      <dd>${data.endUserDetails.phone}</dd>
    </div>
    <div>
      <dt>End User End User Email</dt>
      <dd>${data.endUserDetails.email}</dd>
    </div>
    <div>
      <dt>End User Address</dt>
      <dd>${data.endUserDetails.address.street}, ${data.endUserDetails.address.cityStateZip}
      </dd>
    </div>
    <div>
      <dt>End User City, State, Zip Code</dt>
      <dd>${data.endUserDetails.address.street}, ${data.endUserDetails.address.cityStateZip}
      </dd>
    </div>
  </div>
</dl>
`

app.post('/guarantee-trial-offer-program', async (req, res) => {
  const guarantee_trial_offer_program = req.body.guarantee_trial_offer_program
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
        subject: `Status update for Guarantee Trial Offer Program - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(guarantee_trial_offer_program)
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
        subject: `Status update for Guarantee Trial Offer Program from - ${initial_status} (to User)`
      }
    ],
    from: form_notification.toUser.from, // Change to your verified sender
    html: htmlFor(guarantee_trial_offer_program)
  };

  try {
    /* CD (JE on 20210513): comment one out of them you can figure it
    out which is which since its descriptive */
    console.log("sending email", emailToUser)
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
