import React, { Component } from 'react';
import Navbar from './menu.jsx';
import Joi from "joi-browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Styles/signin.css'
import Footer from './footer.jsx'
import axios from "axios";
import jwt_decode from 'jwt-decode';
class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          account:
          {
            email:"",
            password:""
          },
          errors:{
            
          }
         }
    }
    email = React.createRef();
    pass = React.createRef();

    schema =
    {
      email : Joi.string().required().email(),
      password : Joi.string().required().min(5)
    };

    componentDidMount()
    {
      const x =localStorage.getItem('userStorage')
    console.log(x)
    if(x == null)
    {
        
       
    }
    else
    {
      this.props.history.push('/Shop');
    }
    
    }
    handleSubmit=(event)=>
    {
      event.preventDefault();
      const { history } = this.props;
     axios
       .post("http://localhost:5000/api/SignIn",{
        email:this.state.account.email,
  
        password: this.state.account.password
       })
       .then(res=> {
        
        if(res)
        {
       localStorage.setItem('userStorage',res.data)
      }
        
      var x = localStorage.getItem('userStorage');
      console.log(x)
      const decoded = jwt_decode(x);
      if(decoded.isAdmin === true)
      {
        history.push('/Admin')
        console.log("assaas")
      }
      else{
      history.push('/profile')
      }
      })
      .catch(function(){
        alert("INvalid Email or password ")
      })
       
    }
  
    handleChange=(e)=>
    {
     
      const updateAccount = {...this.state.account};
      updateAccount[e.currentTarget.name] = e.currentTarget.value;
      this.setState({account : updateAccount});
    }
    validate=()=>
    {
      const result = Joi.validate(this.state.account ,this.schema,{abortEarly:false});
      console.log(result);
      if(!result.error) return null; 
      const errors={};
      for(let items of result.error.details)
      {
        errors[items.path[0]] = items.message;
       
      }
   
      return errors;
    }

    render() { 
      const my={           
        paddingTop:40
      }
        return ( 
            <div>
              
                    <Navbar/>
                    <div className="container-fluid">
                    <div class="wrapper" style={my}>
    <form class="form-signin" onSubmit={this.handleSubmit.bind(this)}>   
      <center> <h1><FontAwesomeIcon id="logotitle" icon={faUser}/>    </h1></center> 
     <div className="form-group">
      <input ref={this.email} type="text" id="email" onChange={this.handleChange} value={this.state.account.email} class="form-control" name="email" placeholder="Email Address"  autofocus="" />
     {this.state.errors.email && <div className="alert-danger"> {this.state.errors.email}
     </div>}
      </div>
      <div className="form-group">
            <input ref={this.pass}  type="password" id="pass" onChange={this.handleChange} value={this.state.account.password} class="form-control" name="password" placeholder="Password" />      
            {this.state.errors.password && <div className="alert alert-danger"> {this.state.errors.password}
            </div>}
            </div> 
      <button class="btn btn-lg btn-primary btn-block" value={this.state.account.password} type="submit">Login</button>   
    </form>
  </div>
          
                    </div>
                    <br/>
                    <Footer/>
            </div>
         );
    }
}
 
export default signIn;