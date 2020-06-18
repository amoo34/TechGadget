import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.css";
import './Styles/navbar.css'
import { Dropdown,Navbar} from 'react-bootstrap';
import { browserHistory } from 'history'

class menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    logout(e)
    {
      e.preventDefault();
      console.log(this)

      localStorage.removeItem('userStorage');
      this.props.history.push('/');
    }
    render() { 
        const styles=
        {
            marginTop: 6
        }
        const loginReg = (
          <li class="nav-item " >
          <Dropdown>
          
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FontAwesomeIcon id="cart2" icon={faUser}/>
          </Dropdown.Toggle>
          
          <Dropdown.Menu class="dropdown1">
          <Dropdown.Item><Link to="/SignIn" >SignIn</Link></Dropdown.Item>
    <Dropdown.Item><Link to="/Signup" >Join us</Link></Dropdown.Item>
  
      </Dropdown.Menu>
      </Dropdown>
          
          </li> 
        )
        const userLink =(
          <li class="nav-item " >
          <Dropdown>
          
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FontAwesomeIcon id="cart2" icon={faUser}/>
          </Dropdown.Toggle>
          
          <Dropdown.Menu class="dropdown1">
        <Dropdown.Item><Link to="/profile" >Account</Link></Dropdown.Item>
        <Dropdown.Item>
          <a href="" onClick={this.logout.bind(this)}>LogOut</a>
        </Dropdown.Item>
      
      </Dropdown.Menu>
      </Dropdown>
          
          </li> 
        )
        return ( 
            <div className="Navbar container-fluid">            
            
          <Navbar fixed="top" className="navbar-dark" expand="lg" bg="light">
            <Navbar.Brand ><h4>DigiTech</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <h5><Link to="/" className="nav-link">Home</Link></h5>
      </li>
      <li className="nav-item">
      <h5><Link to="/Shop" className="nav-link">Shop</Link></h5>
      </li>
    
      </ul>
      <ul className="nav navbar-nav ml-auto">
     
     {localStorage.userStorage ? userLink : loginReg}
      <li className="nav-item" style={styles}>
      <h4>
      <Link to="/Cart" className="nav-link" >
      <button id="cart">
          <span className="mr-2">
       <FontAwesomeIcon id="cart1" icon={faCartPlus}/>
       </span>
     
       </button>
      </Link></h4>
       </li>
    </ul>
 </Navbar.Collapse>
 </Navbar>

            </div>
         );
    }
}
export default withRouter(menu)
