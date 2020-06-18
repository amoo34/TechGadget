import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.css";
import './Styles/navbar.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const styles=
        {
            marginTop: 6
        }
        return ( 
            <div className="container-fluid">            
            <nav class="navbar navbar-expand-md bg-light navbar-light">
            <h1 className="navbar-brand">DigiTech</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <h5><Link to="/" className="nav-link">Home</Link></h5>
      </li>
      <li class="nav-item">
      <h5><Link to="/Shop" className="nav-link">Shop</Link></h5>
      </li>
      <li class="nav-item">
      <h5><Link to="/Contact" className="nav-link">Contact</Link></h5>
      </li>   
      </ul>
      <ul class="nav navbar-nav ml-auto">
      <li class="nav-item" style={styles}>
      <h4>
      <Link to="/Cart" className="nav-link" >
      <button id="cart">
          <span className="mr-2">
       <FontAwesomeIcon icon={faCartPlus}/>
       </span>
     
       </button>
      </Link></h4>
       </li>
      <li class="nav-item " >
      <div className="dropdown"  >
      <button class="btn btn-primary dropdown-toggle" style={{height:50,marginTop:7}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <Link to="/Contact"  className="nav-link"> 
       
       <FontAwesomeIcon icon={faUser} />
       </Link>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
      </div>
      
      </li> 
        
    </ul>
  </div>  
</nav>
     
        
            </div>
         );
    }
}
 
export default Navbar;