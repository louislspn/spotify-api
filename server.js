const express = require('express')
const http = require('http')
const spotify = require('./utils/fetch')
const tokens = require('./utils/tokens')

const app = express()

app.get('/current', (req, res) => {

  tokens.init() // CREATE OR REFRESH TOKENS
  const creds = require('./utils/creds.json') // LOAD JSON

  spotify.fetchapi('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': 'Bearer ' + creds.access_token
    },
    data: {}
  }, 'GET', { req, res })

})

const server = http.createServer(app)
server.listen(4000)