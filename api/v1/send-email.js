const express = require("express");
const sgMail = require("@sendgrid/mail");
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helpers functions
const toEmail = ({text: email}) => ({email})


app.post("/form-submit", async (req, res) => {
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
        subject: form_notification.toNsk.emailContent.subject
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    text: form_notification.toNsk.emailContent.body
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
    text: form_notification.toUser.emailContent.body
  };

  try {
    /* CD (JE on 20210514): comment one out of them you can figure it
    out which is which since its descriptive */
    await sgMail.send(emailToUser)
    await sgMail.send(emailToNSK)
    res.status(200).json({ message: "Email sent!" });
  } catch(error) {
    return res
        .status(400)
        .json({ error: "Oops... something went wrong" + error });
  }
});

module.exports = {
  path: "/api/v1/send-email",
  handler: app,
};
