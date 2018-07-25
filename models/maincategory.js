
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var maincategorySchema=new Schema({
    title:{
        type:String,
        unique:true
        
    },
    os: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Window'
            },
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ubuntu'
            },
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Android'
            },
        ],
        // subcategory:
        //  [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'subcategory'

        // }]
});
module.exports = mongoose.model('maincategory',maincategorySchema);