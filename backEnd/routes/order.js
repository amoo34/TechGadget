const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Order} = require('../models/order')
const multer = require('multer')




router.post('/',async(req, res,next) => {
   
      const order = new Order(
        {
   
    Uname : req.body.Uname,
    Uemail : req.body.Uemail,
    Pid : req.body.Pid,
    Pimage : req.body.Pimage,
    Ptitle : req.body.Ptitle,
    Pprice : req.body.Pprice,
    Did : req.body.Did,
    Pstatus : req.body.Pstatus
    } 
    )
   
  console.log("done")

   const s = await order.save();
console.log(s)
res.send(order)

});
router.get('/',async (req, res) => {
    const myorder =await  Order.find();
    res.send(myorder);
  });
  module.exports = router; 