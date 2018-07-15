const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('superagent')

const incomingOne = require('./routes/incomingOne')
var {SLACK_URL} = require('../.env')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', incomingOne)

server.post('/api/slack', (req, res) => {
  request
    .post(SLACK_URL)
    .set({'Content-type': 'application/json'})
    .send({ text: req.body.text })
    .end((err, res) => {
      if (err) {
        console.log({err});
      } else {
        console.log('ok!');
      }
    })
})

module.exports = server
