const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User }= require('../models/user');
const express = require('express');
const router = express.Router();
const Joi = require('joi')
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
router.get('/',(req,res)=>
{
    console.log("authenticasn")
    res.send(true);
});
router.post('/',async(req,res)=> 
{
    
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid Email.');
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');
  
  const token = user.generateAuthToken();
  res.header('x-auth-token',token).send(token)
     
});
function validate(req) {
    const schema = {

      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(req, schema);
  }
module.exports = router;