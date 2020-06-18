import React, { Component } from 'react';
import Navbar from './menu';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const fixnav=
        {
            paddingTop:90
        }
        return ( 
            <div className="Cart">
            <Navbar/>
            <div style={fixnav}>
                No cart
            </div>
           
            </div>
        
         );
    }
}
 
export default Cart;