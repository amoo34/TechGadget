import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Productnewpage from './Productnewpage';
class ProductDetailPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Productnewpage/>
            </div>
         );
    }
}
 
export default ProductDetailPage;