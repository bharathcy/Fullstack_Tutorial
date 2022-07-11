const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(session({secret: "dfsdsfsfdsfdsf!!!21312321"}));


app.get('/', function(req, res)
{

   if(req.session.page_views){
      req.session.page_views++;
      res.send("Welcome"+req.session.username+"You visited this page " + req.session.page_views + " times");
   } else {
      req.session.username = "suresh"
      req.session.page_views = 1;
      res.send("Welcome"+req.session.username+" to this page for the first time!");
   }
});

app.get('/ok/', function(req, res){
   res.send("This is another page!");
});

app.get('/logout/', function(req, res){
   req.session.destroy(function(err) {
      console.log("Logged Out!!")
   })
   res.send("Logged out!!!");
});

app.listen(3002);
