
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productImage:{
    type:String,
    required:true
  },
id:{
    type:Number,
    required: true,
    max:1500
},
title:{
    type:String,
    required:true
},

price:{
    type:Number,
    required:true
},
details:{
    type:String,
    required:true
},
quantity:{
    type:Number,
    required:true
}})
const Product = mongoose.model('Products',productSchema);
exports.Product = Product;