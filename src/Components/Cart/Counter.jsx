import React, { Component } from 'react';
import {ProductConsumer} from '../../Context.js'
class Counter extends Component {
    state = {  }
    render() { 
    
        return (
       
                                
                  <div>
        <button className="btn btn-primary mr-2" onClick={this.props.handleIncrement}>+</button>
        <span className="h4">{this.props.count}</span>
        <button className="btn btn-primary ml-2" onClick={this.props.handleDecrement}>-</button>    
            </div> 
           
        )
    }
}
export default Counter;