var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var windowSchema=new Schema({
    id:{
        type:String,
        unique:true
    }
});
module.exports = mongoose.model('Window',windowSchema);