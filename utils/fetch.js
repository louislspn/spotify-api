function fetchapi (uri, params, method, express, callback = () => false) {

  var XMLHttpRequest = require('xhr2');

  var xhttp = new XMLHttpRequest()

  xhttp.open(method, uri, true)
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  Object.keys(params.headers).map(h => {
    xhttp.setRequestHeader(h, params.headers[h])
  })

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      return express ? express.res.send(this.responseText) : callback(JSON.parse(this.responseText))
    }
  }

  xhttp.send(new URLSearchParams(params.data).toString())

}

exports.fetchapi = fetchapi