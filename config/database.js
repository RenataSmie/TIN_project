var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "TestUser",
  password: "TPO1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});