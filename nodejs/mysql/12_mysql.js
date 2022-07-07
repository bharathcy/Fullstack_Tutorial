var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack"
});

con.connect(function(err) {
  if (err) throw err;
  query1 = "SELECT * from Candidates WHERE Candidate_Id=3;"
  con.query(query1, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});