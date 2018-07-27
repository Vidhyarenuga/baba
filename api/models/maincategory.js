
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var maincategorySchema=new Schema({
    title:{
        type:String,
        unique:true
        
    },
    os: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'os'
            }
        ],
        
});
module.exports = mongoose.model('maincategory',maincategorySchema);