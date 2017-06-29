var https = require('https')
var fs = require('fs')

var express = require('express')
var app = express()


app.get('/ip', function(req, res) {
  httpsrequest = https.request(options, (httpsresponse) => {
    httpsresponse.on('data', (chunk) => {
      console.log(chunk.toString())
      res.json({
        ServerIP: chunk.toString(),
        ClientIP: req.connection.remoteAddress
      })
    })
  })
  httpsrequest.on('error', (e) => {
    console.error(e)
  })
  httpsrequest.end()
})

const options = {
  hostname: 'tools.clifflu.net',
  port: 443,
  path: '/ip',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}
app.listen(8888)
