const express = require('express');
const app = express();
const products = require('./routes/Product');
var cors = require('cors');
const signup = require('./routes/user.js')
const mongoose = require('mongoose');
const helmet = require('helmet');
const signin = require('./routes/signer.js');
const order = require('./routes/order')
const cart = require('./routes/cart');
const reviews = require('./routes/reviews')
mongoose.set('useNewUrlParser', true);
  
mongoose.connect('mongodb://localhost/DigitechDB')
.then(()=>console.log("Database connected"))
.catch(err=> console.log("couldnot connect to MOngoDB",err))

const port = parseInt(process.env.PORT);
console.log('The value of PORT is:', port);
if(app.get('env') === 'development')
{
    console.log("using morgan");
}
app.use(helmet());
var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.static('cartuploads'));
app.use(cors());
app.use('/api/review',reviews)
app.use('/api/order',order);
app.use('/api/cart',cart)
app.use('/api/Signup',signup);
app.use('/api/SignIn',signin); 
app.use('/api/product',products);




app.listen(5000,()=>console.log("listeing to 5000"))