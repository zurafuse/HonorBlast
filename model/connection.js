const mysql = require("mysql");

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "honorblast"
});

module.exports = con;