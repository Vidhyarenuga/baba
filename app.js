var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var window=require('./models/window');
var android=require('./models/android');
var ubuntu=require('./models/ubuntu');
var maincategory=require('./models/maincategory');
var subcategory=require('./models/subcategory');
var item=require('./models/item');
const url = 'mongodb://localhost:27017/example';
const connect = mongoose.connect(url,{
    useNewUrlParser: true
});
connect.then((db) => {

    console.log('Connected correctly to server');
});

var port=5000;
app.listen(port,function(){
    console.log('app listening on port:' +port);
});