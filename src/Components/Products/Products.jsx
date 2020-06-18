import React, { Component } from 'react';
import '../Styles/recprod.css'
import './../Styles/product.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProductConsumer } from '../../Context';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
class Products extends Component {
    state = {
      isLoaded:"",
      cart:{
        Uid:"",
        Uname:"",
        Uemail:"",
        Pid:"",
        Pimage:"",
        Ptitle:"",
        Pprice:"",
        }
    }
    productidentify=(id)=>
    {
        console.log(id);
    }
  
    componentDidMount()
    {
      this.setState({isLoaded:true})
    }
    render() { 
        const {id,productImage,title,price } = this.props.product
        return ( 
            <ProductConsumer>
            {
                (value)=>
                {

                  const presrc = "http://localhost:5000/";
                  const src = presrc.concat(productImage);
                 
          return  <div class="upuol">
                <ul id="uol" key={id} className="col-lg-2 col-offset-2 col-md-3 col-sm-6 xx">
                       <center>
                       <Link to={`/Productnewpage/${id}`} onClick={()=>this.productidentify(id)}>
                         <li >
                           <img id="productSize" src={productImage} alt=""/> 
                        </li>  
                       
                        <li  id="pTitle">
                        
                         {title}  
                        </li>
                      
                        <li id="pPrice">
                         Rs: {price}  
                        </li>
                       
                        <li id="pCart">
                       <button id="pCart1" >Buy Now </button> 
                       
                        </li>
                        </Link>   
                        </center>
                        </ul>
            </div>
              }   }
              </ProductConsumer>
         );
    }
}
 
export default Products;