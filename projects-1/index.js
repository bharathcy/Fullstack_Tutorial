const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");


mongoose.connection.on('error', (error) => {
    console.log(error)
})

app.get('/getAll', (req, res) => {
  const collection  = mongoose.connection.db.collection("Student5");
  collection.find({}).toArray(function(err, data){
  	res.send(data)
  });    
})


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
