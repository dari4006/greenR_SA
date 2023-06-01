const pg = require('pg')

let db
if (process.env.DB_PASSWORD) {
    db = new pg.Pool({
        database: "greenR_SA",
        password: process.env.DB_PASSWORD
    })
} else {
    db = new pg.Pool({
        database: "greenR_SA"
    })
}

module.exports = db