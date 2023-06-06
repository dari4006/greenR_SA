// const db = require('../db/db')

// const Comments = {

//   getComments: () => {
//     const sql = 'SELECT * FROM comments'

//     return db
//       .query(sql)
//       .then(dbRes => dbRes.rows)
//   }
// }

// module.exports = Comments

const db = require('../db/db')

const Comment = {
  findAll: () => {
    const sql = `SELECT comments.user_id, comments.depot_id, comments.comment, comments.id, users.email FROM comments INNER JOIN users ON users.id = comments.user_id;`

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (depot_id, user_id, comment) => {
    const sql = `
      INSERT INTO comments(depot_id, user_id, comment)
      VALUES ($1, $2, $3)
      RETURNING *
    `

    return db
      .query(sql, [depot_id, user_id, comment])
      .then(dbRes => dbRes.rows[0])
  },

  update: (user_id, comment, commentId) => {
    const sql = `
      UPDATE comments SET user_id =$1, comment = $2 WHERE id = $3
      RETURNING *
    `

    return db
      .query(sql, [user_id, comment, commentId])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (commentId) => {
    const sql = 'DELETE FROM comments WHERE id = $1'

    return db.query(sql, [commentId])
  }
}

module.exports = Comment