require('dotenv').config();
import express from "express";
import { sendMail } from "../services/email-dynamic-from"

// CD (AN on 20210623): Middeware
const app = express();
app.use(express.json());

// Endpoints
app.post("/", async (req, res) => {
    try {
        let { content, details } = req.body

        details = details.filter(item => {
            return item.name === 'Contact Us'
        })[0]

        details.toNsk.cc = details.toNsk.cc.map(item => {
            return item.text
        })
        details.toNsk.bcc = details.toNsk.bcc.map(item => {
            return item.text
        })

        details.toUser.cc = details.toUser.cc.map(item => {
            return item.text
        })
        details.toUser.bcc = details.toUser.bcc.map(item => {
            return item.text
        })

        const nskMailOptions = {
            to: details.toNsk.to,
            from: details.toNsk.from,
            cc: details.toNsk.cc,
            bcc: details.toNsk.bcc,
            subject: details.toNsk.emailContent.subject,
            text: `${details.toNsk.emailContent.body} \n\n
            ${content.firstName} ${content.lastName}
            ${content.email}
            ${content.company ? content.company : ''}
            ${content.phone ? content.phone : ''}
            ${content.message}
            `
        }
        sendMail(nskMailOptions)

        const userMailOptions = {
            to: content.email,
            from: details.toUser.from,
            cc: details.toUser.cc,
            bcc: details.toUser.bcc,
            subject: details.toUser.emailContent.subject,
            text: details.toUser.emailContent.body
        }
        sendMail(userMailOptions)

        res.send("success")
    } catch (error) {
        console.log(error)
        res.status(500).send("error")
    }
});

export default {
  path: "/api/v1/contact-us/send-email",
  handler: app
};