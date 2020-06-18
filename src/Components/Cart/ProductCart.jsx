import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import '../Styles/productCart.css'
import Counter from './Counter'
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import {storeProducts} from '../../data'
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
import ReactTimeout from 'react-timeout'
class ProductCart extends Component {
    state = { 
        count:1,
        cartshow:[],
        ordershow:[],
     
        isLoaded: false,
     }
    async componentWillMount()
    {
      
     await Axios
      .get("http://localhost:5000/api/cart")
      .then(res=>
        {
          
   const token = localStorage.userStorage
   const decoded = jwt_decode(token);
      
        let CartShow = res.data.map((prod)=>{

        if( decoded.email === prod.Uemail)
        {
        this.state.cartshow.push(prod)
          console.log('thsi')
        }
      }
      )
      console.log(this.state.cartshow)
      })
      .catch(error=>
        {
          console.log("it is an error")
        })

        this.setState({isLoaded:true})
       console.log("hello")
     
       
     
    }
    handle=()=>
    {

      this.props.history.push('/Shop');
    }
    buyProduct=(Ordertitle)=>
    {
      const Order =  this.state.cartshow.filter(data=>
        {
       
          if(data.Ptitle === Ordertitle)
          { 
            console.log(data.Did)
            return (Axios
            .post("http://localhost:5000/api/order",
            {
              Uname:data.Uname,
              Uemail:data.Uemail,
              Pid: data.Pid,
              Pimage: data.Pimage,
              Ptitle:data.Ptitle,
              Pprice: data.Pprice,
              Did : data.Did
             })
             .then((res)=>
              {
               Axios
               .delete("http://localhost:5000/api/cart/"+data.Did)
               .then(()=>{
                let latestCart = this.state.cartshow.filter(carts=>
                  {
                      if(carts.Did!=data.Did)
                      {
                        return carts
                      }
                      else{
                        console.log("sad")
                      }
                     
                  })
                this.setState({cartshow:latestCart})
                  }  )
              }
             )
              .catch(error=>
                {
                 console.log("mas")
                  console.log("face problem")
                }
              )
            )
            }

          else{
            console.log("I am not supposed to tell you")
          }
        })

    }
 /*   increHandler=()=>
    {
      this.setState({count : this.state.count+1})
    }
    decreHandler=()=>
    {
      console.log("work2")
    }
    */
      deleteProduct=(did)=>
      {
        Axios
               .delete("http://localhost:5000/api/cart/"+did)
               .then(()=>{
                let latestCart = this.state.cartshow.filter(carts=>
                  {
                      if(carts.Did!=did)
                      {
                        return carts
                      }
                      else{

                      }
                     
                  })
                this.setState({cartshow:latestCart})
                  }  )
          
          
              .catch(error=>
                {
                  console.log("face problem")
                }
              )
              }

    render() { 
     const {cartshow}=this.state
      const presrc = "http://localhost:5000/";
     console.log("WHo wins")
     const emptyCart=(
       <div id="no">
       <div id="no1">
         <h4 >There are no Items in the Cart</h4>
         </div>
         <br/><br/>
         <div id="no2">
      <button  id="continue" onClick={this.handle} >Continue Shopping</button>
      </div>
       </div>
     )
     const prodCart=(  <div>
     <center> <h1> Shopping Cart</h1></center> 
      <table class="table">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                    
                            <th>Buy Now</th>
                            <th>Thrash</th>
                        </tr>
                        </thead>
                        <tbody>
          
                   {
          
                   
                       this.state.cartshow.map(product=>{
           
                console.log("hel")
                     return(
 
                           <tr>
                             <td>   <img id="imgSize" src={presrc+product.Pimage} alt=""/> </td>
                             <td>{product.Ptitle}</td>
                             <td>{product.Pprice}</td>
                         
                             <td><button className="btn btn-secondary"onClick={()=>this.buyProduct(product.Ptitle)}>Buy now</button></td>
                             <td><button className="btn btn-secondary"onClick={()=>this.deleteProduct(product.Did)}>Delete </button></td>
                           </tr>
                 )   }  
                  )

               
 }          
     
                    </tbody>
                    </table>
                  
               </div>)
                console.log(cartshow.length)
        return (
          <div> 
      {cartshow.length >0 ? prodCart : emptyCart}
   
      </div>       );
    }
}
 
export default withRouter(ProductCart)