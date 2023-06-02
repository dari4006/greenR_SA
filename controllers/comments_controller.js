const express = require('express')
const router = express.Router()

// models
const Comments = require('../models/comment')

// routes

router.get('/', (req, res) => {
  Comments
    .getComments()
    .then(comments => res.json(comments))
})

module.exports = router