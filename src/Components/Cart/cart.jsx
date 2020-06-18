import React, { Component } from 'react';
import Navbar from '../menu';
import ProductCart from './ProductCart';
import Footer from '../footer'

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        const fixnav=
        {
            paddingTop:10
        }
        return ( 
            <div className="Cart">
            <Navbar/>
            <div style={fixnav}>
             
            <ProductCart/>
            <Footer/>
            </div>
           
            </div>
        
         );
    }
}
 
export default cart;