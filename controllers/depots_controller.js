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

router.get('/:depot_id', (req, res) => {
  const depotId = req.params.depotId

  Depot
    .findDepotByDepotId(depotId)
    .then(depot => res.json(depot))
})

router.get('/:coorindates', (req, res) => {
  const coorindates = req.params.coorindates

  Depot
    .grabDepotCoords(cooridnates)
    .then(coords => res.json(coords))
})
module.exports = router