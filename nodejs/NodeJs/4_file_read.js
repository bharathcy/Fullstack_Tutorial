var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
   let url = req.url
   if(url ==='/about'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>about us page<h1>'); //write a response
      res.end(); //end the response
      return res.end();
    }
   if(url ==='/contact'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>contact us page<h1>'); //write a response
      res.end(); //end the response
      return res.end();
    }
   if(url ==='/home'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>home page<h1>'); //write a response
      res.end(); //end the response
      return res.end();
    }
   if(url ==='/blog'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>blog page<h1>'); //write a response
      res.end(); //end the response
      return res.end();

    }
   if(url ==='/about'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>about us page<h1>'); //write a response
      res.end(); //end the response
      return res.end();
    }
    else
    {
      fs.readFile('some_file.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }

}).listen(8001);
