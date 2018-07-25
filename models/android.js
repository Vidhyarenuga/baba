var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var androidSchema=new Schema({
    id:{
        type:String,
        unique:true
    }
});
module.exports = mongoose.model('Android',androidSchema);