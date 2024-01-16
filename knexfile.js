const path = require("path")

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "tuffi.db.elephantsql.com",
      port: "5432",
      user: "gymkwbzb",
      password: "aHdquoEazZNpbXEl1LVEI1C8-yKiG3tq",
      database: "gymkwbzb",
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.query("SET CONSTRAINTS ALL DEFERRED;", function (err) {
          if (err) {
            console.error("Erro durante afterCreate:", err)
          }
          cb(err, conn)
        })
      },
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        "src",
        "database",
        "knex",
        "migrations"
      ),
    },
    useNullAsDefault: true,
  },
}
