//Importing Express Framework
const express=require('express');
//Importing Path Module for EJS
const path = require('path');
//Port Number at which server will run
const port=8000;
//for connecting database
const db=require('./config/mongoose');
// For Models
const Detail=require('./models/detail.js');
// Server Instalizing
const app=express();
// For Setting up EJS
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// Making Middlewares
app.use(express.urlencoded());
//for including css files
app.use(express.static('assets'));
// Controller for deleting contact
app.get('/delete-detail/',function(req,res){ 
    console.log("Deleted ID : ",req.query);
    let id=req.query.id;
    Detail.findByIdAndDelete(id,function(err){
    if(err){
    console.log('Error in deleting a object');
    return;}
    return res.redirect('back');
    });
})
//Controller for Home page 
app.get('/',function(req,res){
    Detail.find({},function(err,details){
        if(err){
            console.log('Error in fetching database ');return ;
        }
        return res.render('home',{
            title: "To Do App",
            DETAIL: details
        });
    });
});
// Controller for handling post requests
app.post('/create-detail',function(req,res){
    console.log("New Data : ",req.body);
    Detail.create({
        DESCRIPTION:req.body.DESCRIPTION,
        category:req.body.category,
        date:req.body.date,
    },function(err,newDetail){
        if(err){
            console.log('Error in creating a Details!');
            return;}
    return res.redirect('back');
    });
});
// Controller for listening server whether it is working or not
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Hehe Server is running");
});
