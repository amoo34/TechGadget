import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Navbar from './menu.jsx';
import Axios from 'axios';
class profile extends Component {
    state = { 
        name:"",
        email:"",
        ordershow:[],

     }

   async componentDidMount()
    {
      const x =localStorage.getItem('userStorage')
      console.log(x)
      if(x == null)
      {
       return this.props.history.push('/Shop');
         
      }
      else
      {
       
      }
      
        const token = localStorage.userStorage
        const decoded = jwt_decode(token);
        this.setState({
            name:decoded.name,
            email:decoded.email
        })
        await Axios
      .get("http://localhost:5000/api/order")
      .then(res=>
        {
          
   const token = localStorage.userStorage
   const decoded = jwt_decode(token);
      
      let orderShow = res.data.map((prod)=>{
       
    
   
        if( decoded.email === prod.Uemail)
        {
        this.state.ordershow.push(prod)
          console.log('thsi')
        }
      }
      )
      console.log(this.state.ordershow)
      })
      .catch(error=>
        {
          console.log("it is an error")
        })

        this.setState({isLoaded:true})
       console.log("hello")
     
       

    }
    render() { 
        const presrc = "http://localhost:5000/";
      let Price=0;
        return (  
            <div class="container-fluid">
                <Navbar/>

                    <h1>Welome {this.state.name}
                        </h1>
                        
                        <table class="table">
                       <thead>
                       <tr>
                           <th>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Total Price</th>
                       </tr>
                       </thead>
                       <tbody>
         
                  {
         
                  
                      this.state.ordershow.map(product=>{
          
               console.log("hel")
                    return(

                          <tr>
                            <td>   <img id="imgSize" src={presrc+product.Pimage} alt=""/> </td>
                            <td>{product.Ptitle}</td>
                            <td>{product.Pprice}</td>
                        <td>  {
                              Price+=product.Pprice
                                                 }</td>  
                          </tr>
                        
                )   }   )
}                    
          </tbody>
              
                   </table>
                  <h1> Total Price  = {Price}</h1>
            </div>
        );
    }
}
 
export default profile;