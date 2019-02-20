// set up MySQL connection parameters
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
 };

// make connection to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting to database burgers_db: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection for our ORM to use
module.exports = connection;