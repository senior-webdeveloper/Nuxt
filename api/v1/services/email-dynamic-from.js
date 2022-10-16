require('dotenv').config();

const sgMail = require('@sendgrid/mail')

async function sendMail (mailOptions) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    mailOptions = {
    ...mailOptions,
    };

    sgMail
    .send(mailOptions)
    .then(() => {
        console.log('Email sent')
        return { status: 'success', message: 'An e-mail has been sent.' }
    })
    .catch((error) => {
        console.error(error)
        return error
    })
}

module.exports = {
    sendMail,
}