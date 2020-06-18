import React, { Component } from 'react';
import Navbar from './menu';
import './Styles/Signup.css';
import axios from "axios";
import Footer from './footer.jsx'
import profile from './profile.jsx'
import Swal from 'sweetalert2'
class Signup extends Component {
    state = {  
      registration:
      {
        name:"",
        email:"",
        phoneNumber:"",
        password:""
      }
    }
    componentDidMount()
    {
      const x =localStorage.getItem('userStorage')
    console.log(x)
    if(x == null)
    {
        
       
    }
    else
    {
      this.props.history.push('/profile');
    }
  }
    handleSubmit=(event)=>
    {
      if(this.state.registration.name.length<5)
      {

        return Swal.fire("Name must contain atleast 5 characters") 
      }
      else if(this.state.registration.email.length <5)
      {
       return  Swal.fire("Email not proper format") 
      }
      else if( this.state.registration.phoneNumber.toString().length <10 || this.state.registration.phoneNumber.toString().length >11)
      {
       console.log( this.state.registration.phoneNumber.toString().length)
        return Swal.fire("PHone Number not valid") 
      }
     axios
       .post("http://localhost:5000/api/Signup",{
        name :this.state.registration.name,
        email:this.state.registration.email,
        phoneNumber:this.state.registration.phoneNumber,
        password: this.state.registration.password
       })
       .then(res=> {
        
        if(res)
        {
       localStorage.setItem('userStorage',res.data)
      }
   
       this.props.history.push('/profile')
        
      })
      .catch(function(){
        console.log("error hai bh")
      } )
    }
    handleChange=(e)=>
    {
      const account = {... this.state.registration};
      account[e.currentTarget.name] = e.currentTarget.value;
      this.setState({registration:account})
      console.log(this.state.registration)
    }
    render() { 
        const my={
            paddingTop:5
        }
        return ( 
            <div className="Signup">
             <Navbar/>
                    <div className="container-fluid">
                    <div class="wrap" style={my}>
    <form class="form-signup" onSubmit={this.handleSubmit}>       
      <center><h3 class="form-signin-heading">Signup</h3></center>
      <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" onChange={this.handleChange} name="name"
     aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">E-MAIL</label>
    <input type="email" class="form-control"  onChange={this.handleChange} name="email"
     aria-describedby="emailHelp" placeholder="Enter EMAIL"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">PhoneNumber</label>
    <input type="text" class="form-control"  onChange={this.handleChange} name="phoneNumber"
     aria-describedby="emailHelp" placeholder="Enter PhoneNumber"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Password</label>
    <input type="password" class="form-control"  onChange={this.handleChange} name="password"
     aria-describedby="emailHelp" placeholder="Enter Password"/>
  </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">SignUp</button>   
    </form>
  </div>
                    </div>
                    <br/>
                    <Footer></Footer>
            </div>
         );
    }
}
 
export default Signup;