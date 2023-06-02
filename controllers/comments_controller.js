const express = require('express')
const router = express.Router()

// models
const Comment = require('../models/comment')

// routes
router.get('/', (req, res) => {
  Comment
    .findAll()
    .then(comments => res.json(comments))
})

router.post('/', (req, res) => {
  const depot_id = req.body.depot_id
  const user_id = req.body.user_id
  const comment = req.body.comment


  Comment
    .create(depot_id, user_id, comment)
    .then(comment => res.json(comment))
})

router.delete('/:id', (req, res) => {
  const commentId = req.params.id

  Comment
    .delete(commentId)
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router