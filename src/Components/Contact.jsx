import React, { Component } from 'react';
import Navbar from './menu';
import Footer from './footer';
import './Styles/contact.css';
import axios from 'axios'
class Contact extends Component {
  state = {
    doctors: [{ name: "yahya" }, { name: "Abdul Rehman" }],
    newDoc: {
      name: ""
    }
  };

    render() { 
        return ( 
            <div className="Contact">
               <Navbar/>
               <center>
               <div className="bg-dark text-light" id="start">
               <h1>CONTACT FORM</h1>
               <form class="form-horizontal" >
       
       <div class="form-group">
         <div class="col-sm-12">
           <input type="text" class="form-control" id="name" placeholder="NAME" name="name" />
         </div>
       </div>
 
       <div class="form-group">
         <div class="col-sm-12">
           <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" />
         </div>
       </div>
 
       <textarea class="form-control" rows="10" placeholder="MESSAGE" id="msg" name="message"></textarea>
       
       <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
         
          <span class="send-text">SEND</span>
       
       
       </button>
       
     </form>
  
               </div>
               </center>
               <Footer/>
            </div>
         );
    }
}
 
export default Contact;