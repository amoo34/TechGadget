import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Navbar from './Components/menu.jsx';
import Ahome from './Components/Admin/Ahome'
import Aproduct from './Components/Admin/AProduct'
import Aorder from './Components/Admin/Aorders'
import myProduct from './Components/Products/ProductMain.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Cart from './Components/Cart/cart.jsx';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import AdminProdDelete from './Components/Admin/AProductDelete'
import {storeProducts} from './data.js';

import signIn from './Components/signIn';
import Signup from './Components/Signup';
import Productnewpage from './Components/Products/Productnewpage';
import profile from './Components/profile'
import error from './Components/error404'
import AdminReview from './Components/Admin/review'
function App() {
  const Product =    storeProducts;
  return (
    <React.Fragment>
    
      <div className="content">
      <Switch>
      <Route path="/"  exact component={Home}/> 
      <Route path="/error"  exact component={error}/> 
      <Route path="/AdminProdDelete" exact component={ AdminProdDelete}/> 
      <Route path="/AdminProd" component={Aproduct}/>
      <Route path="/AdminOrder" component={Aorder}/>
     <Route path="/Productnewpage/:id" component={Productnewpage}/>
      <Route path="/Admin" component={Ahome}/>
      <Route path="/Shop" component={myProduct}/>
      <Route path="/Cart" component={Cart}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/SignIn" component={signIn}/>
      <Route path="/SignUp" component={Signup}/>
      <Route path="/Details" component={Productnewpage}/>
      <Route path="/profile" component={profile}/>
      <Route path="/AdminReviews" component={AdminReview}/>
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

