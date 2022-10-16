const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helper functions
const toEmail = ({text: email}) => ({email})
const htmlFor = data => `
<p>Status updated to ${data.status}</p>
<p>Form: Technical Support Questions </p>
<dl>
<div>
    <dt>
      Form ID
    </dt>
    <dd>
      ${ data.formId }
    </dd>
  </div>
  <div>
    <dt>
      Name
    </dt>
    <dd>
      ${ data.name }
    </dd>
  </div>
  <div>
    <dt>
      Title
    </dt>
    <dd>
      ${ data.title }
    </dd>
  </div>
  <div>
    <dt>
      Company
    </dt>
    <dd>
      ${ data.company }
    </dd>
  </div>
  <div>
    <dt>
      Email
    </dt>
    <dd>
      ${ data.email }
    </dd>
  </div>
  <div>
    <dt>
      Phone
    </dt>
    <dd>
      ${ data.phone }
    </dd>
  </div>
  <div>
    <dt>
      Product
    </dt>
    <dd>
      ${ data.product }
    </dd>
  </div>
  <div>
    <dt>
      Machine Type
    </dt>
    <dd>
      ${ data.machineType }
    </dd>
  </div>
  <div>
    <dt>
      Application
    </dt>
    <dd>
      ${ data.application }
    </dd>
  </div>
  <div>
    <dt>
      Question
    </dt>
    <dd>
      ${ data.question }
    </dd>
  </div>
</dl>
`

app.post('/technical-questions', async (req, res) => {
  const technical_question = req.body.technical_question
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
        subject: `Status update for Technical Question - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(technical_question)
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
        subject: `Status update for Technical Question from - ${initial_status} (to User)`
      }
    ],
    from: form_notification.toUser.from, // Change to your verified sender
    html: htmlFor(technical_question)
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
  handler: app,
};
