
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var osSchema=new Schema({
   
        _id:mongoose.Schema.Types.ObjectId,
        title:String

        

   
});
module.exports = mongoose.model('os',osSchema);


// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: String,
//     price: Number
// });

// module.exports = mongoose.model('Product', productSchema);