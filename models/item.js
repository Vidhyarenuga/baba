var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcat'
    },
     title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
   
    version: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    comments: {
        type: String

    },
    createdBy: {
        type: String
    },
    imgslides: {
        type: String,
        required: true,
        min:2,
        max:4
    },
    videoPath: {
        type:String
    },
    files:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
}, 

{
    timestamps: true
});
module.exports = mongoose.model('item', itemSchema);