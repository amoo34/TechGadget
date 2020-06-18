import React, { Component } from 'react';
import './Styles/popularBrands.css'

class PopularBrands extends Component {
    state = {  }
    render() { 
        return (
            <div className="PopularBrands container-fluid">
            
           <center><h3 id="title_popular">Popular Brands</h3></center> 
            <div className="row" id="firstrow">
           
            <div className="col-3">
        
            <h4> Razer</h4>
            <img id="logopos"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Razer_Snake_Logo.svg/1200px-Razer_Snake_Logo.svg.png" alt=""/>
            
             </div>
            
            
            <div className="col-3">
            
                <div>
             <h4> Xiaomi</h4>
            <img id="logopos" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png" alt=""/>
        </div>
        
            </div>
            <div className="col-3">
            <h4>Bloody</h4>
            <img id="logopos" src="https://www.bloody.com/en/images/logo.png" alt=""/>
            </div>
            <div className="col-3">
            <h4>HP</h4>
            <img id="logopos"
            src="http://seeklogo.com/images/H/hp-logo-EEECF99DCE-seeklogo.com.png" alt=""/>
            </div>
          
            </div>

            <div className="row" id="nextrow">
            <div className="col-3">
            <h4> Lenovo</h4>
            <img id="logopos"
            src="https://dataquestuk.com/wp-content/uploads/new-lenovo-logo.png" alt=""/>
             </div>
            <div className="col-3">
             <h4> Ubisoft</h4>
            <img id="logopos" 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Ubisoft_2017.svg/1200px-Ubisoft_2017.svg.png" alt=""/>
         
            </div>
            <div className="col-3">
            <h4>Oppo</h4>
            <img id="logopos" src="https://1000logos.net/wp-content/uploads/2018/08/Oppo-Logo.png" alt=""/>
            </div>
            <div className="col-3">
            <h4>Dell</h4>
            <img id="logopos"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Dell_logo_2016_black.svg/1024px-Dell_logo_2016_black.svg.png" alt=""/>
            </div>
          
            </div>
            </div>
         );
    }
}
 
export default PopularBrands;