var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ubuntuSchema=new Schema({
    id:{
        type:String,
        unique:true
    }
});
module.exports = mongoose.model('Ubuntu',ubuntuSchema);