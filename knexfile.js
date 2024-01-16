const path = require("path")

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
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
