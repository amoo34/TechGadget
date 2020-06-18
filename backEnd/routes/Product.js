const express = require('express');
const _ = require('lodash');
const router = express.Router();
const {Product} = require('../models/products')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/');
  },
  filename: function(req,file,cb){
    try{
    cb(null,file.originalname);
    }
    catch{
      console.log("fail yars")
    }
  }
});
const fileFilter = (req,file,cb)=>
{
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
  {
    cb(null , true);
  }
  else
  {
    cb(null , false);
  }
}

const upload= multer({storage : storage,
fileFilter : fileFilter});

router.get('/',async (req, res) => {
  const productss =await  Product.find();
  res.send(productss);
});

router.get('/:id',async (req, res) => {
  const productss =await  Product.findOne({id : req.params.id} )
  console.log("hell")
  res.send(productss);
  console.log(productss)
});

router.post('/', upload.single('productImage'),async(req, res,next) => {
 const fs =require('fs')
 
  console.log("product IN GINUP")
  let prod = await Product.findOne({ id: req.body.id });
  if (prod) return res.status(400).send('Product already used');
  const product = new Product(
    {
      productImage: req.file.filename,
      id:req.body.id,
      title:req.body.title,
      price:req.body.price,
      details:req.body.details,
      quantity: req.body.quantity
    }
  );

  console.log(req.file);
  await product.save();
  res.send(product)
 
 
  
   console.log(req.file);
  
 
 console.log("doen")

});
router.delete('/:id',(req,res,next)=>{
  Product.deleteOne({id :req.params.id},function(err){
    if(err)
    {
      console.log(err);
    }
    else{
      res.send("all is done")
    }
  });

})



module.exports = router; 