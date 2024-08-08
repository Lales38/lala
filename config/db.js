import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sueldoslala",
  connectionLimit: 5, //Es la cantidad de conneciones simultaneas permitidas en FREE.
  waitForConnections: true,
  queueLimit: 0,
});

pool
  .getConnection()
  .then((connection) => {
    pool.releaseConnection(connection);
    console.log("¡¡¡ Connection sucessfully :) !!!!");
  })
  .catch(err => 
    console.error("¡¡¡Ups, connection was failed !!!", err)
  );

export default pool;
