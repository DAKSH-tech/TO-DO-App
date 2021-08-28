const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Detail_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Succefully Connected to database')
});