import React, { useEffect, useState } from 'react';
import ProductService from './ProductService';
import "./Style.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Counter from "./Counter"
var quantity;
const username=sessionStorage.getItem("uid");
//const quantity=1;
 const addToCart = async (e,pid,productName,price,quantity) => {
    e.preventDefault();
    console.log("quant value from add to cart is:",quantity);
    console.log(username,pid,quantity);
   if(username!= null){
    if(quantity>0 ){
    const formData = new FormData();
    formData.append("username",username);
    formData.append("pid",pid);
    formData.append("quantity",quantity);
    formData.append("productName",productName)
    formData.append("price",price);
   // console.log(image);

    try{
   const sendData = await axios.post('http://localhost:8080/cart/add',formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
          }
    })
        .then(response => {
            alert("product added to cart.");
            console.log('Product added to cart:', response.data);
        });
    }
    catch(error){
        console.log(error);
    }
}
else{
    alert("Quantity cannot be lesser than 1.");
}
   }
   else{
    alert("Login to Buy Products.")
   }
}
class HomeProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={
            product:[]
        }
    }

    componentDidMount(){
        ProductService.getProduct().then((response) => {
            this.setState({ product: response.data})
        });
    }
     render(){
        {
            const mystyle = {
              color: "white",
              backgroundColor: "red",
              border:"2px solid black",
              borderRadius:"7px",
              padding: "10px",
              fontFamily: "Arial"
            };
        return (
            <div>
            <h1 className = "text-center"> PRODUCTS </h1>
            <table>
                <thead>
                </thead>
                <tbody className='tbody'>
                    <div className='product-card'>
                    {
                        this.state.product.map(
                            product => 
                           
                            <div key = {product.productId}>
                               <div className='product'>
                                
                                 <div className='pimg'>{product.image && <img src={`data:image/jpeg;base64,${product.image}`}alt="image" className="pro-img"/>}</div>
                                 <div className='pname'> {product.productName}</div>                                  
                                 <div className='pprice'>Price: {product.price}</div> 
                                  <div>
                                  
                                   Quantity:<input type="number" id="quant" placeholder='enter quantity' defaultValue={0} onChange={(e) =>{quantity=(e.target.value)}}  />
                                  </div>
                                 
                                 <button className='button' onClick={(e)=>addToCart(e,(product.productId),(product.productName),(product.price),(quantity))}>Add to cart</button>
                                </div>
                            </div>
    
                        )
                    }
                  </div>
                </tbody>
            </table>
           
        </div>


        )
    }
    }
}

export default HomeProduct;