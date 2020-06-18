import React, { Component } from 'react';

import {paginate} from './Components/utils/paginate'
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products:[],
            cart:[],
            pageSize:12,
            currentPage:1,
            searchQuery:"",
            quantity:1
        }
    }
   
    handleIncrement=(id)=>
    {
        console.log("jh")
        const tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        tempCart[index].stock = tempCart[index].stock + 1;
        console.log(this.state.cart)
        console.log(tempCart[index])
        this.setState({cart: [...tempCart]})
    }
    handleDecrement=(id)=>
    {
        const tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id == id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        tempCart[index].stock = tempCart[index].stock - 1;
   
        console.log(tempCart[index])
        this.setState({cart: [...tempCart]})
    }
     handleDetail=()=>
     {
         console.log("hello Detail");
     }
     getItem=(id)=>
     {
         const product = this.state.products.find(item =>
            item.id == id);
            return product;
     }
     addToCart=(id)=>
     {
      
        try{  
               const token = localStorage.userStorage
        const decoded = jwt_decode(token);
        }
        catch{
            return alert("Login before Adding to cart")
        }

         let tempproducts = [...this.state.products];
        
         const index = tempproducts.indexOf(this.getItem(id));
        
            this.setState({products:tempproducts})
             this.state.cart.push(tempproducts[index]);
        
        console.log(tempproducts)
         console.log(this.state.cart);
         console.log(this.state.products)
     }
     getPageData=()=>
     {
         const {products,searchQuery,pageSize,currentPage} = this.state;
         let filtered = products;
         filtered = products.filter(m=>
             m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
                 
             const data = paginate(filtered, currentPage, pageSize);
                                          
             return {totalCount: filtered.length,mypro : data};
     }
     handlePageChange=(page)=>
     {
        let cPage = {...this.state.currentPage};
     
        cPage = page;
         this.setState(()=>{
            return { currentPage : cPage};
        })
       
     }
     handleSaerch=(query)=>
     {
         this.setState({searchQuery:query,currentPage:1})
        console.log(query)
     }
     setProducts =()=>
     {
         const presrc = "http://localhost:5000/";
        Axios
        .get("http://localhost:5000/api/product")
        .then(res=>
          {
            const persons = res.data;
           persons.map(prod=>
            {
                console.log(prod.productImage)
       
                prod.productImage = presrc.concat(prod.productImage)
                console.log(prod.productImage)
            })
        
           this.setState({ products : persons });
           console.log(this.state.products)
          }
          )
     }
     componentDidMount=()=>
     {
        this.setProducts();
     }
     tester = ()=>
     {
         console.log('State Produxt:',this.state.products[0].cart);
         const tempPro = [...this.state.products];
         tempPro[0].cart = true;
         this.setState( {products:tempPro});
         console.log('State Produxt:',this.state.products[0].cart);
         }
     
    render() { 
        const {totalCount ,mypro} = this.getPageData();
        return (  
        <div>
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart : this.addToCart,
                handlePageChange : this.handlePageChange,
                mypro : mypro,
                totalCount : totalCount,
                tester:this.tester,
                handleDecrement:this.handleDecrement,
                handleIncrement:this.handleIncrement
            }}>
                {this.props.children}
            </ProductContext.Provider>
        </div>
        );
    }
}
 
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};