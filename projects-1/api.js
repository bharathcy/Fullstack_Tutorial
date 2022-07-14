const express = require('express');
const app = express();
const mongoose = require('mongoose');
const formidable = require('formidable');
const path = require('path')
const fs = require('fs');
const ejs = require('ejs');
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);
app.use( express.static( "uploads" ));

connection_string = "mongodb://127.0.0.1:27017/Blogs"
mongoose.connect(connection_string);


const insertItem = (collection_name, item) => {
  const collection =  mongoose.connection.db.collection(collection_name);
  return collection.insertOne(item)
}

const getItems = (collection_name) => {
  const collection = mongoose.connection.db.collection(collection_name);
  return collection.find({}).toArray();
}

const update_one = (collection_name) => {
  const collection = mongoose.connection.db.collection(collection_name);
  return collection.updateOne(
    {"title":"OK"},
    {$set:{"title":"Testing3"}});
}

const fileUpload = async (collection_name, files) => {
        let uploadPath = ''
        let rawFile = ''
        const collection = mongoose.connection.db.collection(collection_name);
        await collection.count().then((count) => {
            uploadPath = path.join('uploads/', (count).toString()+".jpg")
            rawFile = fs.readFileSync(files.blog_image.filepath)
        });

      fs.writeFile(uploadPath, rawFile, function(err){
        if(err) console.log(err)
        return "Successfully uploaded"
      })
};


const updateItem = (collection_name, id, values) => {
  const collection = mongoose.connection.db.collection(collection_name);
  return collection.updateOne(
    {"_id":ObjectId("62c5d60ee5cd83ed968da344")},
    {$set:values})
  }


app.get('/write_blog', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})

app.post('/getAll', async (req, res) => {
    res.send(await getItems('blog_list'))
})

app.get('/update', async (req, res) => {
    res.send(await update_one('blog_list'))
})

app.post('/insert', async (req, res) => {
        const form = formidable({ multiples: true });
        form.parse(req, (err, fields, files) => 
        {
            console.log(fields)
            insertItem("blog_list", fields);
            fileUpload("blog_list", files);
            if (err) {res.send(String(err)); return;}
            res.send("Inserted new blog!!");
        });
});

app.get("/", async(req, res) => {
    console.log(await getItems('blog_list'))
  res.render("home", {"data":await getItems('blog_list')}) //cONTEXT
})


app.get('/login_page/', (req, res) => {
    res.sendFile(__dirname +'/views/login.html')
})


app.post('/login', (req, res) => {
    res.send(DATA)
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})