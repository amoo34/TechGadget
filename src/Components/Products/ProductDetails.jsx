import React, { Component } from 'react';
import './../Styles/product.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { storeProducts } from '../../data';
import Productnewpage from './ProductMain';

import Pagination from './Pagination';
import SearchBar from './searchBox.jsx';
import {paginate} from '../utils/paginate'
import ProductCart from '../Cart/ProductCart'

import {ProductConsumer} from '../../Context.js'
import Products from './Products';
class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
      
            currentPage:1,
            searchQuery:"",
            cart:[]
         }
    }

  
   
    render() { 
     
     

        const styles1=
        {
          paddingTop:10
        }

   
        return (  
  
                <div className="container-fluid" style={styles1}>
            <ProductConsumer>
                                {value=>
                                {
                                const prods = paginate(value.products,value.currentPage,value.pageSize)
                                console.log(value.products)
                                    return (
                                        <div>
                                          <div class="bg-dark" id="prod">
            
                   <center><h1 id="heading">{value.totalCount} items Found</h1></center> 
                   </div> {
                                        prods.map(product=>{
                                        return   <Products key={product.id} product={product}/>  
                                    })  } 
                                 
                                    <Pagination  current={value.currentPage} itemsCount={value.products.length}
              pageSize={value.pageSize} onPageChange={value.handlePageChange}/></div>
                                     ) }}
                        </ProductConsumer>
    
             </div>       
         
        );
    }
}
 
export default ProductDetails;