var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

// var maincategory=require('./api/models/maincategory');
// var subcategory=require('./api/models/subcategory');
// var item=require('./api/models/item');
const osRoutes=require('./api/routes/oss');
const morgan=require('morgan');
const url = 'mongodb://localhost:27017/example';
const connect = mongoose.connect(url,{
    useNewUrlParser: true
});
connect.then((db) => {

    console.log('Connected correctly to server');
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

//Routes which should handle request
app.use("/oss",osRoutes)

// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });

var port=5000;
app.listen(port,function(){
    console.log('app listening on port:' +port);
});