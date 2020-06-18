import React, { Component } from 'react';
import './Styles/footer.css'
class footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">

            <div className="row">
            <div className="col-4">
            <h4 id="head">
                Shop with Verified Payments
            </h4>
            <br/>
            <p id="para">
            DigiTech understands that online Tech shopping in Pakistan comes with its fair share of risks.
             This is why customers have the security of choosing from verified vendors 
             and brands from Karachi, Lahore, Islamabad and all across Pakistan
            </p>
            </div>
            <div className="col-4">
            <h4 id="head">
            Hassle Free Delivery 
            </h4>
            <p id="para">
            Online shopping is only as good as its execution and 
            DigiTech promises hassle free delivery right from the moment
             you order to when your package is dropped at your door
            </p>
            </div>
            <div className="col-4">
            <h4 id="head">
            Payment Options to Suit Every Style 
            </h4>
            <p id="para">
            You can choose to pay through a credit/debit card or opt for cash on delivery. 
            Or why not avail exclusive offers by downloading DigiTech Wallet – a closed loop digital 
            wallet that offers you a secure, easy way to make payments. 

            </p>
            </div>
            </div>

            <div className="row nextrow">
            <div className="col-4">
            <h4 id="head">
            Simplify Corporate Purchases 
            </h4>
            <br/>
            <p id="para">
            Who says corporate purchases need to be a complicated affair? When you opt for DigiTech
             Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs
            </p>
            </div>
            <div className="col-4">
            <h4 id="head">
            Buy Value, not Just Goods with Daraz Care  
            </h4>
            <p id="para">
            DigiTech does not just cater online shopping in Pakistan
             but also aims to simplify the way you give back to society.
              
            </p>
            </div>
            <div className="col-4">
            <h4 id="head">
            Shop Around the World sitting at home
            </h4>
            <p id="para">
            Get the chance to shop online from vendors around the world without leaving the Digitech website. 
            Featuring thousands of novelty gadgets and accessories,

            </p>
            </div>
            </div>
            <div className="row">
            <div className="col-4"></div>
          <div className="col-4">
          <center>
            <p id="copyright">&copy; 2015 TechStore.com</p>
            </center>
            </div>
            <div className="col-4"></div>
            </div></div>
        );
    }
}
 
export default footer;