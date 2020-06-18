import React, { Component } from 'react';
import Navbar from '../menu';
import './../Styles/product.css'

import { storeProducts } from './../../data';
import Validity from './../Validity';
import ProductDetails from './ProductDetails';
import ImgSlider from './../ImgSlider';
import Footer from './../footer';
class myProduct extends Component {
    state = { 
        product : storeProducts
     }
    render() { 
        console.log(this.state.product);
        return ( 
            <div className="myProduct">
                
                <Navbar/>
                <ProductDetails/>
               
                <Validity/>
                <Footer/>
                
            </div>
         );
    }
}
 
export default myProduct;