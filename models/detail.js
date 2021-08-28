const mongoose=require('mongoose');
const DetailSchema=new mongoose.Schema({
    DESCRIPTION:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required:true
    }

});
const Detail=mongoose.model('Detail',DetailSchema);
module.exports=Detail;