
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var subcategorySchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{

        type:String,
        unique:true
    },
    maincategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'maincategory'
    },
   
    
});
module.exports = mongoose.model('subcategory',subcategorySchema);