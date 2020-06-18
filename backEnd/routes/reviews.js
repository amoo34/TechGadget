const _ = require('lodash');

const { Review }= require('../models/reviews');
const express = require('express');
const router = express.Router();
const Joi = require('joi')


const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
router.get('/',async(req,res)=>
{
  const reviews =await Review.find();
    res.send(reviews);
});
router.post('/',async(req,res)=>
{

  console.log("hello")
  const review = new Review(
  {
  Uname : req.body.Uname,
  Uemail : req.body.Uemail,
  Pid : req.body.Pid,
  Ptitle: req.body.Ptitle,
  Comment : req.body.Comment,
  } 
  )
  try{
  console.log("right")
  await review.save();
  res.send(review)
}
catch{
  console.log("some")
 
}
});

module.exports = router;