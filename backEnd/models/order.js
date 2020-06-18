const mongoose = require('mongoose');
const Joi = require('joi');
const orderSchema = new mongoose.Schema({
 
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
        },
        Did:
        {
            type:String,
            required:true
        }
      });
        const Order = mongoose.model('orders',orderSchema)
        exports.Order = Order;