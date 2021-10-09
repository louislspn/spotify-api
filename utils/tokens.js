const fs = require('fs')
const spotify = require('./fetch')
const creds = require('./creds.json')

function init () {

  const base64token = Buffer.from(creds.client_id + ':' + creds.client_secret).toString('base64')

  function editjson (res) {
    const data = {
      ...creds,
      ...res,
      timestamp: Date.now()
    }

    console.info(data)

    fs.writeFileSync('./utils/creds.json', JSON.stringify(data))
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

  }

  

}

exports.init = init