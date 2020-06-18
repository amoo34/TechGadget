import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping,faUndoAlt, faTruck } from '@fortawesome/free-solid-svg-icons'
import './Styles/valid.css';
class Validity extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Validity container-fluid">
            <div id="valid">
            
            <div className="row">
            <div className="col-4" id="col-4" >
              <h5 id="portion11">Free Delievery</h5>
                <h3 id="portion12"><FontAwesomeIcon  id="insideicon" icon={faTruck}/></h3>
                
               <p id ="portion13">Free Delievery all orders over Rs 1000</p>
            </div>
          

            <div className="col-4" id="col-4" >
                <h5 id="portion21">Free Returns</h5>
                <h3 id="portion22"><FontAwesomeIcon  id="insideicon" icon={faUndoAlt}/></h3>
                
               <p id="portion23">Return Your package for Free</p>
            </div>
            <div className="col-4" id="col-4">
            <h5 id="portion31">Need Help</h5>
                <h3 id="portion32"><FontAwesomeIcon  id="insideicon" icon={faHandsHelping}/></h3>
                
               <p id="portion33">Call us on Toll Free PhoneNumber</p>
            </div>
            </div>
            
            
            </div></div>
         );
    }
}
 
export default Validity;