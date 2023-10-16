var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0315",
  database: "sys",
});
db.connect();

module.exports = db;
