var express = require('express');
var qs = require('querystring');
var mysql = require('mysql');


app = express();



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack"
});


http.createServer(function (req, res) {
  if (req.url == '/register') 
      {
      	con.connect(function(err) {
        	if (err) throw err;
        	  query1 = "INSERT INTO Candidates (Candidate_Name, Candidate_Email, Candidate_City)\
             values ('Candidate_Name', 'Candidate_Email',  'Candidate_City');"
        	  con.query(query1, function (err, result, fields) {
        	    if (err) throw err;
        	    res.writeHead(200, {'Content-Type': 'text/html'});
        	    res.write("Data Inserted");//JSON.stringify(result));
        	    res.end(); //end the response
        	  });
        	});
        }
  else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="register" method="post" enctype="multipart/form-data">');
    res.write('<input type="text" name="fname" placeholder="Name"><br><br>');
    res.write('<input type="text" name="email" placeholder="Email"><br><br>');
    res.write('<input type="text" name="city" placeholder="City"><br><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8001);