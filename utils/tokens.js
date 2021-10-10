const fs = require('fs')
const spotify = require('./fetch')
let creds = require('./creds.json')

function init (callback) {

  const base64token = Buffer.from(creds.client_id + ':' + creds.client_secret).toString('base64')

  function editjson (res) {

    const data = {
      ...creds,
      ...res,
      timestamp: Date.now()
    }

    fs.writeFileSync('./utils/creds.json', JSON.stringify(data))
    creds = require('./creds.json')

    callback(creds)

  }

  if(!creds.access_token) { // CREATE

    spotify.fetchapi('https://accounts.spotify.com/api/token', {
      headers: {
        'Authorization': 'Basic ' + base64token
      },
      data: {
        grant_type: 'authorization_code',
        code: creds.code,
        redirect_uri: creds.redirect_uri
      }
    }, 'POST', false, editjson)

  } else if (Date.now() - parseInt(creds.timestamp) >= 216000) { // REFRESH

    spotify.fetchapi('https://accounts.spotify.com/api/token', {
      headers: {
        'Authorization': 'Basic ' + base64token
      },
      data: {
        grant_type: 'refresh_token',
        refresh_token: creds.refresh_token
      }
    }, 'POST', false, editjson)

  } else {

    callback(creds)

  }

  

}

exports.init = init