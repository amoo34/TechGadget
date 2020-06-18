import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Anavbar from './Anavbar'
import Axios from 'axios';
class AProductDelete extends Component {
    state = { 
        Order:[],
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
      .get("http://localhost:5000/api/product")
      .then(res=>
        {
          

      let orderShow = res.data.map((prod)=>{
       
    
   
       
        this.state.Order.push(prod)
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
    deleteProduct=(id)=>
    {
      Axios
             .delete("http://localhost:5000/api/product/"+id)
             .then(()=>{
              let latestCart = this.state.Order.filter(carts=>
                {
                    if(carts.id!=id)
                    {
                      return carts
                    }
                    else{

                    }
                   
                })
              this.setState({Order:latestCart})
                }  )
        
        
            .catch(error=>
              {
                console.log("face problem")
              }
            )
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
                               <th>Id</th>
                             
                               <th>Image</th>
                               <th>Product</th>
                               <th>Delete</th>
                             
                
                           </tr>
                           </thead>
                           <tbody>
    
                           {
             
                      
             this.state.Order.map(product=>{
    
      console.log("hel")
           return(
    
                 <tr>
                  
                   <td>{product.id}</td>
                
                   <td>   <img id="imgSize" src={presrc+product.productImage} alt=""/> </td>
                   <td>{product.title}</td>
                   <td><button className="btn btn-secondary"onClick={()=>this.deleteProduct(product.id)}>Delete </button></td>
                
               
          
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
 
export default AProductDelete;