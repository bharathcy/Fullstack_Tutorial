var http = require('http');

//create a server object:

var fs = require('fs');


http.createServer(function (req, res) {
	 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
	var url = req.url;

	 if(url ==='/get'){
	    res.write('<h1>about us page<h1>'); //write a response
	    res.end(); //end the response
	 }else if(url ==='/insert'){
		  fs.readFile('mynewfile1.txt', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			return res.end();
		  });
	 }else{
	    res.write('<h1>Hello World!<h1>'); //write a response
	    res.end(); //end the response
 }
}).listen(8080, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
