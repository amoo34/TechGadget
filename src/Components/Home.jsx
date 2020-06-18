import React, { Component } from 'react';
import Navbar from './menu';
import ImgSlider from './ImgSlider.jsx';
import Validity from './Validity';
import Footer from './footer';
import RecomProduct from './Products/RecomProduct';
import PopularBrands from './PopularBrands';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

       <div>
           <Navbar/>
           <ImgSlider/>
           <PopularBrands/>
           <RecomProduct/>
           <Validity/>
           <Footer/>
       </div>
        );
    }
}
 
export default Home;