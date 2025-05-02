import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// export default {
//   client: "mysql2",
//   connection: {
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   },
// };

export default {
    client: "mssql",
    connection: {
      database: process.env.DB_NAME,
      server: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      options:{
        encrypt: true,
        port: 1433,
        trustServerCertificate: false,
        enableArithAbort: true, // Required by the driver
        connectionTimeout: 30000
      }
    },
  };