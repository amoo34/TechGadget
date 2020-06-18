import React, { Component } from 'react';
import './Styles/imgslider.css'
import Carousel from 'react-bootstrap/Carousel'
class ImgSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
      
            const styles=
            {
                height:550
            }
            const styles1=
            {
              
            }
            const presrc = "http://localhost:5000/";
        return (
        <div class="ImgSlider container-fluid" style={styles1}>
      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={presrc+"slider3.jpg"}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={presrc+"slider1.jpg"}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={presrc+"slider2.jpg"}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
  </div>
        );
      }
    }
 
export default ImgSlider;