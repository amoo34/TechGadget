import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Anavbar from './Anavbar'
import Axios from 'axios';
class Aorders extends Component {
    state = {  
        Allorders:[],
        isLoaded:""
    }

    async componentDidMount()
    {
        
    const x =localStorage.getItem('userStorage')
    console.log(x)
    if(x == null)
    {
        
        this.props.history.push('/Shop');
    }
    
  
        await Axios
      .get("http://localhost:5000/api/order")
      .then(res=>
        {
          

      let orderShow = res.data.map((prod)=>{
       
    
   
       
        this.state.Allorders.push(prod)
          console.log('thsi')
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
    delievered=(Did)=>
    {
      console.log(this.state.Allorders)
      let Orders = this.state.Allorders.filter(orders=>
        {
          console.log(Did)
            if(orders.Did===Did)
            {
            
              return orders
            }
        
           
        })
   
   
      Axios
      .put("http://localhost:5000/api/order/"+Did,
      Orders.Pstatus ="delievered"
      )
      .then((res)=>
      {
        console.log("done")
      })
      .catch(()=>
      {
        console.log("Error")
      })
      console.log(Orders)
      this.setState({Allorders : Orders})
    }
    render() { 
        const divStyle = {
        
            padding :'0'
            
           };
          
        const presrc = "http://localhost:5000/";
        return ( 
         
            <div className="row" style={divStyle}>
                <div className="col-3 bg-dark ash">
              <Anavbar/>
                </div>
                <div className="col-9" id="divss">
                <table class="table">
                       <thead>
                       <tr>
                           <th>User Name</th>
                           <th>User email</th>
                           <th>Image</th>
                           <th>Product</th>
                           <th>Price</th>
                         
            
                       </tr>
                       </thead>
                       <tbody>

                       {
         
                  
         this.state.Allorders.map(product=>{

  console.log("hel")
       return(

             <tr>
              
               <td>{product.Uname}</td>
               <td>{product.Uemail}</td>
               <td>   <img id="imgSize" src={presrc+product.Pimage} alt=""/> </td>
               <td>{product.Ptitle}</td>
               <td>{product.Pprice}</td>
            
           
      
             </tr>
   )   }   )
}       

                           </tbody>
                           </table>
                </div>
         
              
          </div>
         );
    }
}
 
export default Aorders;