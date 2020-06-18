import React, { Component } from 'react';
import Navbar from '../menu';
import './../Styles/product.css'
import SearchBar from './searchBox.jsx';
import { storeProducts } from '../../data';
import Validity from '../Validity';
import ProductDetails from './ProductDetails';
import ImgSlider from '../ImgSlider';
import Footer from '../footer';
import Pagination from './Pagination'
class ProductMain extends Component {
    state = { 
        product : storeProducts,
        pageSize: 8,  
     }

    render() { 

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
 
export default ProductMain;