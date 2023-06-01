const db = require('../db/db')

const Depot = {
  findAll: () => {
    const sql = 'SELECT * FROM depots'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Depot 