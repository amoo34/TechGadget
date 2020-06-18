
const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  
Uname:{
    type:String,
    required:true
},
Uemail:{
    type:String,
    required:true
},
Pid:{
    type:String,
    required:true
},
Ptitle:
{
    type:String,
    required:true
},
Comment:{
    type:String,
    required:true
}})
const Review = mongoose.model('reviews',reviewSchema);
exports.Review = Review;