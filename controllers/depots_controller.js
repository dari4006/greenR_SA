const express = require('express')
const router = express.Router()

// models
const Depot = require('../models/depot')

// routes
router.get('/', (req, res) => {
  Depot
    .findAll()
    .then(depots => res.json(depots))
})

module.exports = router