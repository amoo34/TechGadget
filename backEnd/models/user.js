const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const Joi=require("joi");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
        email: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 255,
        
        },
        phoneNumber:{
          type:Number,
         
          required:true
        },
        password: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 1024
        },
        isAdmin: Boolean
      })
      userSchema.methods.generateAuthToken = function() { 
        const token = jwt.sign({ _id: this._id,name: this.name,email:this.email, isAdmin: this.isAdmin }, 'DigiTech');
        return token;
      }
const User = mongoose.model('myUsers',userSchema)
      
      function validateUser(user) {
        const schema = {
          name: Joi.string().min(5).max(50).required(),
          email: Joi.string().min(5).max(255).required().email(),
          password: Joi.string().min(5).max(255).required(),
          phoneNumber:Joi.number().required()
        };
      
        return Joi.validate(user, schema);
      }
      exports.User = User; 
exports.validate = validateUser;
