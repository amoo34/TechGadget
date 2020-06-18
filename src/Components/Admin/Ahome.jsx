import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';

import Anavbar from './Anavbar'
class Ahome extends Component {
    state = {  }
   componentDidMount()
   {
    const x =localStorage.getItem('userStorage')
    console.log(x)
    if(x == null)
    {
        
        this.props.history.push('/Shop');
    }
    
   }
    render() { 
        const divStyle = {
        
           padding :'0'
           
          };
        return (
         
              <div className="row" style={divStyle}>
                     <div className="col-3 bg-dark ash">
                <Anavbar/>
                  </div>
                  <div className="col-9">

                  </div>
              </div>
                
        
        );
    }
}
 
export default Ahome;