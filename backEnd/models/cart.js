const mongoose = require('mongoose');
const Joi = require('joi');
const cartSchema = new mongoose.Schema({
   
  Uname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
        Uemail: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 255
        },
        Pid:{
          type:String,
          required:true
        },
        Did:
        {
          type:String,
          required:true
        },
        Pimage: {
            type:String
        },
        Ptitle: {
            type:String,
            required:true
        },
        Pprice:{
            type:Number,
            required:true
        }});
        const Cart = mongoose.model('carts',cartSchema)
        exports.Cart = Cart;