require('dotenv').config()
const {fetch} = require("native-fetch");
const {client_id, client_secret} = process.env;

/**
 * Gets access token
 * @return {Promise<void>}
 */

exports.getAccessToken = async function getToken(){
    console.log('Fetching spotify api...')
    try{
        const response = await fetch(`https://accounts.spotify.com/api/token?grant_type=client_credentials`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            json: true
        })
        const data = await response.json()
        return data.access_token
    }catch (e) {
        console.log(`Catch Error:` + e.message)
    }

}

