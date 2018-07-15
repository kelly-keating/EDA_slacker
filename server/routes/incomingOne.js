const express = require('express')
const router = express.Router()

const sayHi = require('./outgoingOne.js')

router.post('/', (req, res) => {
  if(req.body.challenge){
    res.status(200).json({ challenge: req.body.challenge });
  } else {
    console.log(req.body)
    sayHi(req.body)
  }
})

module.exports = router
