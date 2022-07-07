var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/about', function (req, res) {
   res.send('<h3>About Us </h3>');
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})