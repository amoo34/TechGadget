const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Cart} = require('../models/cart')
const multer = require('multer')




router.post('/',async(req, res,next) => {
   
      const cart = new Cart(
        {
   
    Uname : req.body.Uname,
    Uemail : req.body.Uemail,
    Pid : req.body.Pid,
    Did : req.body.Did,
    Pimage : req.body.Pimage,
    Ptitle : req.body.Ptitle,
    Pprice : req.body.Pprice,

    } 
    )
   
  console.log("done")

   const s = await cart.save();
console.log(s)
res.send(cart)

});
router.get('/',async (req, res) => {
    const mycart =await  Cart.find();
    res.send(mycart);
  });
  router.get('/:Did',async (req, res) => {
    const mycart =await  Cart.find({Did : req.params.Did} )
    console.log(mycart)
    res.send(mycart);
  });
  router.delete('/:Did',(req,res,next)=>{
    Cart.deleteOne({Did :req.params.Did},function(err){
      if(err)
      {
        console.log(err);
      }
      else{
        res.send("Done delete")
      }
    });
  });
  module.exports = router; 