const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.status(200).json({ challenge: req.challenge });
})

module.exports = router
