import React, { Component } from 'react';
import axios from "axios";
import {Route,Switch,Link} from 'react-router-dom';
import Anavbar from './Anavbar'
import Swal from 'sweetalert2'
class AProduct extends Component {

    state = {  
        Product:{
            productImage:"",
            id:"",
            title:"",
            price:"",
            details:"",
            quantity:""
        },
      
    }
    componentDidMount()
    {
    
     const x =localStorage.getItem('userStorage')
     console.log(x)
     if(x == null)
     {
         
         this.props.history.push('/Shop');
     }
     
    }
        handleChange=(e)=>
        {
          const products = {... this.state.Product};
          products[e.currentTarget.name] = e.currentTarget.value;
          this.setState({Product:products})
          console.log(this.state.Product)
        }
        handleFirst=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.files[0]
            if(products[e.currentTarget.name] == "")
            {
              return Swal.fire("add image") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleSecond=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.value
            if(products[e.currentTarget.name] == null)
            {
              return Swal.fire("add id") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleThird=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.value
            if(products[e.currentTarget.name] == "")
            {
              return Swal.fire("add name") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleFourth=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.value
            if(products[e.currentTarget.name] == null)
            {
              return Swal.fire("add price") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleFifth=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.value
            if(products[e.currentTarget.name] == null)
            {
              return Swal.fire("add Details") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleSixth=(e)=>
        {
            const products = {... this.state.Product};
            products[e.currentTarget.name] = e.target.value
            if(products[e.currentTarget.name] == null)
            {
              return Swal.fire("add Quantity") 
            }
            this.setState({Product : products})
            console.log(this.state.Product)
        }
        handleSubmit=(event)=>
        {
          event.preventDefault();
          console.log(event.target.title.value)
          let formData = new FormData();
          if( event.target.productImage.files[0] == null)
            {
              return Swal.fire("add image") 
            }
            if( event.target.id.value == "")
            {
              return Swal.fire("add id") 
            }
            if( event.target.title.value == "")
            {
              return Swal.fire("add title") 
            }
            if( event.target.price.value == "")
            {
              return Swal.fire("add price") 
            }
            if( event.target.details.value == "")
            {
              return Swal.fire("add details") 
            }
            if( event.target.quantity.value == "")
            {
              return Swal.fire("add details") 
            }
       formData.append('productImage', event.target.productImage.files[0]);
formData.append('id', event.target.id.value);
formData.append('title', event.target.title.value); 
formData.append('price', event.target.price.value); 
formData.append('details', event.target.details.value); 
formData.append('quantity', event.target.quantity.value); 
       /*   let FormObj = new FormData();
          FormObj.append("productImage",this.state.Product.productImage);
          FormObj.append("id",this.state.Product.id);
          FormObj.append("title",this.state.Product.title);
          FormObj.append("price",this.state.Product.price);
          FormObj.append("details",this.state.Product.details);
          FormObj.append("quantity",this.state.Product.quantity);*/
         axios
           .post("http://localhost:5000/api/product",
           formData)
           .then(res=> {
            
            if(res)
            {
           console.log(res)
          }
            alert("successfully")           
          })
          .catch(function(){
           
          } )
          alert("done")
        }
    render() { 
      const divStyle = {
        
        padding :'0'
        
       };
        return ( 
         
               <div className="row" style={divStyle}>
                
                  <div className="col-3 bg-dark ">
                <Anavbar/>
                  </div>
                  <div className="col-9">
                  <h1>Add Product here</h1>
            <form method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
            <div class="form-group">
    <label for="exampleFormControlFile1">Image</label>
    <input type="file" name="productImage" class="form-control-file" id="exampleFormControlFile1" onChange={this.handleFirst}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Id</label>
    <input type="input" name="id" class="form-control" id="exampleFormControlInput1"  onChange={this.handleSecond}placeholder=""/>
 
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="input" name="title" class="form-control" id="exampleFormControlInput1" onChange={this.handleThird} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Price</label>
    <input type="input" name="price" class="form-control" id="exampleFormControlInput1" onChange={this.handleFourth} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Details</label>
    <input type="input" name="details" class="form-control" id="exampleFormControlInput1" onChange={this.handleFifth} placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Quantity</label>
    <input type="input" name="quantity" class="form-control" id="exampleFormControlInput1" onChange={this.handleSixth} placeholder="name@example.com"/>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Add to DataBase</button> 
</form>
                  </div>
              </div>
        

          
         );
    }
}
 
export default AProduct;