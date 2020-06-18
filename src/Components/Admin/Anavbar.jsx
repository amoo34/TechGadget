import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Anavbar.css'

class Anavbar extends Component {
    state = {  }
    logout(e)
    {
      e.preventDefault();
      console.log(this)

      localStorage.removeItem('userStorage');
      this.props.history.push('/SignIn');
    }
    render() { 
        return ( 
            <div class="bg-dark row as">
                <div className="col-12">
                <ul>
                    <li class="list">
                    <Link to="/Admin" id="texticon">    <FontAwesomeIcon icon={faUser}/>   </Link><br/><br/><br/><br/>
                 
                    </li>
                    <li class="list">
                <Link to="/AdminProd" id="text">Add Products</Link>  <br/><br/><br/>
                </li>
                <li class="list">
                <Link to="/AdminProdDelete" id="text" >Delete Products</Link><br/><br/><br/>
                </li>
                <li class="list">
                <Link to="/AdminOrder" id="text" >CheckOut Orders</Link><br/><br/><br/>
                </li>
                <li class="list">
                <Link to="/AdminReviews" id="text" >CheckOut Reviews</Link><br/><br/><br/>
                </li>
                <li class="list">
                <Link to="/" id="text" >Preview</Link><br/><br/><br/>
                </li>
                <li class="list">
                <a href="" id="text" onClick={this.logout.bind(this)}>LogOut</a>
                </li>
                </ul>
            </div></div>
         );
    }
}
 
export default withRouter(Anavbar)