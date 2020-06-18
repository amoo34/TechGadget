import React, { Component } from 'react';
import { storeProducts } from '../../data';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ProductConsumer} from '../../Context.js'
import Products from './Products';
import '../Styles/recprod.css'
class RecomProduct extends Component {
    
    state = { 
     
           
     }
    render() { 
       
     
        return ( 
            <div className="RecomProduct container-fluid">
            <div className="recomback">
            <div className="herep">
                   <center><h3 className="headingre">Recommended Products</h3></center> 
                   </div>
                   <ProductConsumer>
                     {(value)=>
                      { 
                        return value.products.map(product=>{
                       
                         if(product.id%2 ===0)
                         {
                          return(
                           <Products key={product.id} product={product}/>
                          )
                         }
                      else{
                        return null;
                      }
                        }
                       )
                    }}
                   </ProductConsumer>
                 
            </div>
            </div>
         );
    }
}
 
export default RecomProduct;