import React, { Component } from 'react';
import Anavbar from './Anavbar'
import Axios from 'axios';
class review extends Component {
    state = { 
        reviews:[],
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
       .get("http://localhost:5000/api/review")
       .then(res=>
         {
           
 
       let orderShow = res.data.map((prod)=>{
        
     
    
        
         this.state.reviews.push(prod)
           console.log('thsi')
       }
       )
     
       })
       .catch(error=>
         {
           console.log("it is an error")
         })
 
         this.setState({isLoaded:true})
        console.log("hello")
      
        
 
     }
    

    render() {  
      
  
        return ( 
            <div className="row" >
                <div className="col-3 bg-dark ash">
              <Anavbar/>
                </div>
                <div className="col-9" id="divss">
                <table class="table">
                       <thead>
                       <tr>
                           <th>User Name</th>
                           <th>User email</th>
                           <th>Product</th>
                           <th>Comment</th>
                         
            
                       </tr>
                       </thead>
                       <tbody>

                       {
         
                  
         this.state.reviews.map(product=>{

  console.log("hel")
       return(

             <tr>
              
               <td>{product.Uname}</td>
               <td>{product.Uemail}</td>
              
                <td>{product.Ptitle}</td>
               <td>{product.Comment}</td>
            
           
      
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
 
export default review;