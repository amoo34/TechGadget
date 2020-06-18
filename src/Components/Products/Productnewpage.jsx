import React, { Component } from 'react';
import { storeProducts } from './../../data';
import '../Styles/productnewpage.css'
import Navbar from '../menu.jsx';
import Footer from '../footer';
import {ProductConsumer} from '../../Context'
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
import StarRatings from 'react-star-ratings';
import Swal from 'sweetalert2'
class Productnewpage extends Component {
    state = {  
      good:false,
      data:[],
      cartData:[],
        cart:{
            Uname:"",
            Uemail:"",
            Pid:"",
            Did:"",
            Pimage:"",
            Ptitle:"",
            Pprice:"",
            },
        comment:{ 
        Uname:"",
        Uemail:"",
        Pid:"",
        Ptitle:"",
        Comment:""
      },
        showcomment:[],
        rating:""
    }
 
      handler=()=>
    {
        this.props.history.push('/Shop');
    }
   commentHandler=async()=>
    {
      try{  
        const token = localStorage.userStorage
 const decoded = jwt_decode(token);
 }
 catch{
    return Swal.fire("Login before Submitting Your Review") 
 }
 const token = localStorage.userStorage
 const decoded = jwt_decode(token);

    const thisComment ={...this.state.comment}
    thisComment.Uname = decoded.name;
    thisComment.Uemail = decoded.email;
    thisComment.Pid= this.state.data._id;
    thisComment.Ptitle = this.state.data.title;
    thisComment.Comment = this.state.rating;
  
   
  await   this.setState({comment : thisComment})
console.log(this.state.comment)
await Axios
.post("http://localhost:5000/api/review",{

Uname:this.state.comment.Uname,
Uemail:this.state.comment.Uemail,
Pid: this.state.comment.Pid,
Ptitle:this.state.data.title,
Comment: this.state.comment.Comment
})
.then(res=>{
console.log("Success")
 
console.log(this.state.data.title)
this.state.showcomment.push(res.data)
})
.catch(function()
{
console.log("error")
})
      this.setState({good:false})
     
    }
   async componentDidMount()
    {

      await  Axios
        .get("http://localhost:5000/api/product/"+this.props.match.params.id)
        .then(res=>
            {
                this.setState({data:res.data});
                console.log(this.state.data)
                    return res.data;   
            })
        .catch((error)=>{
            console.log("not get specific product")
        })
     await Axios
        .get("http://localhost:5000/api/review/")
        .then(res=>
            {
               console.log("good")
               
               const filteration = res.data.map(uni=>
            {    
             
              if(uni.Pid == this.state.data._id)
                {
                  
                  console.log(uni.Pid)
               
                  return  this.state.showcomment.push(uni)
                
                }
                else{}
              }
                )
                console.log(this.state.showcomment)
            })
        .catch((error)=>{
            console.log("not get specific product")
        })
    this.setState({good:true})
}
  addToCart=async(e)=>
    {
      e.preventDefault();
      try{  
        const token = localStorage.userStorage
 const decoded = jwt_decode(token);
 }
 catch{
     await Swal.fire("Login before Adding to cart")
    
      return      this.props.history.push('/Signin');
 }
 const token = localStorage.userStorage
 const decoded = jwt_decode(token);
 console.log(decoded.name)
 console.log(this.props.match.params.id)
 console.log(this.state.data)
    const Did = decoded._id.concat(this.state.data._id)
    const pcart ={...this.state.cart}
    pcart.Uname = decoded.name;
    pcart.Uemail = decoded.email;
    pcart.Pid = this.state.data._id;
    pcart.Did = Did;
    pcart.Pimage = this.state.data.productImage;
    pcart.Ptitle = this.state.data.title;
    pcart.Pprice = this.state.data.price
   
     this.setState({cart : pcart})

  
   console.log(pcart)
    Axios
    .get("http://localhost:5000/api/cart/"+Did)
    .then(res=>
        {
           console.log(res.data)
            
        if(res.data == ""){
            Axios
            .post("http://localhost:5000/api/cart",{
           Uname:pcart.Uname,
           Uemail:pcart.Uemail,
           Pid: pcart.Pid,
           Did : pcart.Did,
           Pimage: pcart.Pimage,
           Ptitle:pcart.Ptitle,
           Pprice: pcart.Pprice
          })
          .then(res=>{
     
            console.log(res.data)
            Swal.fire("Check out Your Cart in Order to Buy")
          })
          .catch(function()
          {
            console.log("error")
          })
        }
        else{
            Swal.fire("Already In your Cart ,CheckOut ")
        }
        })
   .catch((error)=>{
   })
   
     console.log(this.state.cars)
     
    } 
    render() {
       console.log(this.state.showcomment)
        const {id} = this.props.match.params;
        console.log(this.state.comment);
        
        return ( 
          
                   
          <div className="Productnewpage">
             <Navbar/>
             <ProductConsumer>
             {(value)=>
                {
                
                    const active = value.products.filter((pro)=>
                    {
                        if( pro.id == id)
                        {
                            console.log(pro.id)
                            return pro;
                        }
                        
                    });
                      const presrc = "http://localhost:5000/";
                  
           return  <div className="container details">
                        <div className="row w-100">
                        <div className="col-6">
                        <img  src={presrc+this.state.data.productImage} id="proimg" alt=""/> 
                        </div>
                        <div className="col-6">
                    <h2 id="proTitle">{this.state.data.title}</h2><br/>
                    <h4 id="proPrice">Rs: {this.state.data.price}</h4><br/><br/>
                    <h6 id="proDetail">{this.state.data.details}</h6><br/>
                   <center><button id="proCart" className="btn-primary" onClick={this.addToCart}>Add To Cart</button></center> 
                        </div>
                        </div>
                        <div class="row w-100">
                    <div className="col-6">
                      <br/><br/>  
                     <center><h1>Reviews</h1></center> 
                      <div class="form-group" id="zxcvzxcv">
                    <textarea
          type="text"
          name=""
          id="zxzx"
          value={this.state.rating}
          onChange={e => {
            
            let d = e.target.value ;
            this.setState({ rating: d });
          }}/>
        <button id="btnsub" onClick={this.commentHandler} >Submit</button>
        </div>
            {    this.state.showcomment.map(procomment=>
            {  return ( <div class="card cv">

  <div class="card-body">
    <h6 class="card-title cvin">UserName : {procomment.Uname}</h6>
    <p class="card-text cvinin">Review : {procomment.Comment}</p>
 
  </div>
</div>
              )  })    }
                    </div>
                    <div class="col-5 offset-1 w-100 h-100 mt-4 bg-light nopadding">
               <center> <h3 class="mt-2"> Delievery Options</h3></center>
             <div class="row"> 
             <div class="col-4 mt-4">
                <h6>Our Location</h6>
                <p>Lahore, Pakistan</p>
                </div>
                <div class="col-4 mt-4">
                <h6>Home Delievery</h6>
                <p>Handle within 5 to 7 woking Days</p>
                </div>
                <div class="col-4 mt-4">
                <h6>How to Buy</h6>
                <p>Cash on Delivery Available all across the Pakistan region</p>
                </div>
                </div>
                <div class="row mt-4"> 
             <div class="col-4 mt-4">
                <h6>Returns and Warranty</h6>
                <p>7 Days Returns</p>
                </div>
                <div class="col-4 mt-4">
                <h6>Change of mind is not applicable</h6>
                <p>Warranty available for New Product</p>
                </div>
                <div class="col-4 mt-4">
                <h6>Product Status</h6>
                <p>Available</p>
                </div>
                </div>
                    </div>
                        </div>
             <br/><br/>
            <center><button className="btn-secondary back" onClick={this.handler}>Back to Shop</button></center>
            </div>
                 } }  
                        </ProductConsumer>
                
            <br/><br/>
            <Footer/>
            </div>
            
         ); 
       
    }
  
}
 
export default Productnewpage;