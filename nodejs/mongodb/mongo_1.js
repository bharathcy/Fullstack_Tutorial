


const mongoose = require('mongoose');
mongoose.connect(mongoString);
const database = mongoose.connection;
database.once('connected', () => {
    console.log('Database Connected');
})
