const db = require('../db/db')

const Comments = {

  getComments: () => {
    const sql = 'SELECT * FROM comments'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Comments