const axios = require('axios')
const fs = require('fs');
require("dotenv").config();


const clientId = process.env.AUTH0_API_ID 
const clientSecret = process.env.AUTH0_API_SECRET
const clientDomain = process.env.AUTH0_DOMAIN

const resetToken = async function() {
    try {
        const { data: { access_token, token_type } } = await axios.post('https://' + clientDomain + '/oauth/token', {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            audience: 'https://' + clientDomain + '/api/v2/'
          })
        
        const json = JSON.stringify({access_token, token_type})
        fs.writeFile(__dirname + '/token.json', json, 'utf8',  function (err) {
            if (err) return console.log(err);
            return console.log('Token Stored');
          })
    } catch (error) {
        return console.log(error)
    }
}

module.exports = {
    resetToken
}
