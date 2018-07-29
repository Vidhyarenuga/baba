
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var maincategorySchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        unique:null
        
    },
    os: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'os',
                required:true
            }
        
        
});
module.exports = mongoose.model('maincategory',maincategorySchema);