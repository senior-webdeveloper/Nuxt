import express from 'express'
import axios from 'axios'
import { sendMail } from '../services/email'
import { new_account_email } from '../utils/email-copy'
require("dotenv").config();
const app = express()
app.use(express.json())


const clientId = process.env.AUTH0_API_ID 
const clientSecret = process.env.AUTH0_API_SECRET
const clientDomain = process.env.AUTH0_DOMAIN
const connectionName = process.env.AUTH0_CONNECTION

app.use(async function (req, res, next) {
    try{
        const { data: { access_token, token_type } } = await axios.post('https://' + clientDomain + '/oauth/token', {
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
          audience: 'https://' + clientDomain + '/api/v2/'
        })
        req.access_token = access_token
        req.token_type = token_type
        next()
      }catch(err){
        console.log("managenemt error 2", err.response)
        next(err)
      }
})


app.get('/', async (req, res) => {
    try {
        const users = await axios.get('https://' + clientDomain + '/api/v2/users', {
            headers: { 
                'Authorization': `${req.token_type} ${req.access_token}`
                }
        })
        res.send(users.data)
    } catch (error) {
        console.log(error.response)
        res.status(500)
    }
})

app.post('/', async (req, res) => {
    try {
        const password = Math.random().toString(36).slice(-16);
        const users = await axios.post('https://' + clientDomain + '/api/v2/users',{
            email: req.body.email,
            app_metadata: { role: req.body.role, createdBy: req.body.createdBy, updatedBy: req.body.updatedBy },
            given_name: req.body.given_name,
            family_name: req.body.family_name,
            connection: connectionName,
            email_verified: false,
            password: password,
        },{
            headers: {
                "Authorization": `${req.token_type} ${req.access_token}`
              }
        })
        const ticket = await axios.post('https://' + clientDomain + '/api/v2/tickets/password-change', {
            result_url: process.env.APP_URL,
            user_id: users.data.user_id,
            mark_email_as_verified: true,
        },{
            headers: {
                "Authorization": `${req.token_type} ${req.access_token}`
              }
        })
        sendMail({
            to: req.body.email,
            ...new_account_email(ticket.data.ticket)
        })
        res.send(users.data)
    } catch (error) {
        console.log("user post error", error.response)
        res.status(500).send(error.response.data.message)
    }
}) 

app.patch('/:id', async (req, res) => {
    try {
        const request = {            
            app_metadata: { role: req.body.app_metadata.role, updatedBy: req.body.updatedBy },
            given_name: req.body.given_name,
            family_name: req.body.family_name,
        }
        if(req.body.password) request.password = req.body.password

        const users = await axios.patch('https://' + clientDomain + '/api/v2/users/' + req.params.id, request, 
        {
            headers: {
                "Authorization": `${req.token_type} ${req.access_token}`
              }
        })
        res.send(users.data)
    } catch (error) {
        console.log("error", error)
        res.status(500).send((error.response && error.response.data) ? error.response.data.message : 'Unknown Error' )
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const users = await axios.delete('https://' + clientDomain + '/api/v2/users/' + req.params.id ,
        {
            headers: {
                "Authorization": `${req.token_type} ${req.access_token}`
              }
        })
        res.send(users.data)
    } catch (error) {
        console.log("error", error.response)
        res.status(500)
    }
})

app.post('/reset-password', async (req, res) => {
    try {
        await axios.post('https://' + clientDomain + '/dbconnections/change_password', {
            client_id: clientId,
            email: req.body.email,
            connection: connectionName,
        })
        res.status(200).send("success")
    } catch (error) {
        console.log("error", error)
        res.status(500)
    }
})

export default {
  path: '/api/v1/auth/users',
  handler: app
}