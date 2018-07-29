var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subcategory'
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
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        //required: true
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
        //required: true,
        min:2,
        max:4
    },
    videoPath: {
        type:String
    },
    files:{
        type:String,
        //required:true
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