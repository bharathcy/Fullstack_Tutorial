const express = require('express');
const mongoose = require('mongoose');
//var bodyParser = require('body-parser');
const formidable = require('formidable');
const path = require('path')
const fs = require('fs');


//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app = express();
mongoose.connect("mongodb://127.0.0.1:27017/Blogs");
const database = mongoose.connection;


const User = mongoose.model('User', Schema({
  name: String,
  email: String
}));


app.post('/register', async (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      
      if (err) {
        res.send(String(err));
        return;
      }

      const collection = mongoose.connection.db.collection("blog_list");
      collection.insertOne({"title":fields['title'],
        "category":fields['category'],
        "description":fields['description']})


       await collection.count().then((count) => {
            console.log('-------->', count);
        });


        var uploadPath = path.join(__dirname, 'uploads')
                + '/'+  collection.find().count()+1+".jpg"
        var rawFile = fs.readFileSync(files.blog_image.filepath)

      fs.writeFile(uploadPath, rawFile, function(err){
        if(err) console.log(err)
        return res.send("Successfully uploaded")
      })

      res.send("Inserted new blog!!");
    });
})


app.get('/write_blog', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})


app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})





app.get('/getAll', (req, res) => {
    res.send('Get All API')
})

app.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

app.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

app.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})





app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})