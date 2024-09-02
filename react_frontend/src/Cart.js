import React, { useEffect, useState } from 'react';
import ProductService from './ProductService';
import "./Style.css"
import CartService from './CartService';
import axios from 'axios';
var price=0;
function DeleteProduct(result){
   // const[data,setData]=useState([]);
   // setData(result);
  useEffect(async ()=>{
    //setData(result);
   getData();
},[]);
}

async function deleteOp(id){
 let result=await fetch("http://localhost:8080/cart/deleteproduct/"+id, {
       method:'DELETE'
    });
  //  let result=await axios.delete("http://localhost:8080/cart/deteteproduct/"+id);
 //  result= await result.json();
   alert("pid:"+id+" Product removed succesfully from cart.Refresh the page to show actual products.");
  // console.warn(result);
   getData();
}
const username=sessionStorage.getItem("uid");
async function getData(){
    let result=await fetch(`http://localhost:8080/cart/mycart?username=${username}`);
    result= await result.json();
   // DeleteProduct(result);
}
class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cart:[]
        }
    }
    componentDidMount(){
        CartService.getCart().then((response) => {
            this.setState({ cart: response.data})
        });
    }
   
    
    render (){
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
                <h1 className = "text-center"> Product List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Cart Id</td>
                            <td> Product Id </td>
                            <td> Product Name</td>                      
                            <td> Product price</td>
                            <td> Product quantity</td>
                            <td> Remove Item</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.cart.map(
                                cart => 
                                <tr key = {cart.id}>
                                     <td> {cart.id}</td>   
                                     <td> {cart.pid}</td>  
                                     <td> {cart.productName} </td>
                                     <td> {cart.price} </td> 
                                     <td> {cart.quantity} </td>  
                                     <td className='delete'><span onClick={()=>deleteOp(cart.id)} style={mystyle}>Remove Item</span></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <div className="cart-total">
                    {
                this.state.cart.map(
                                cart =>                           
                              {price=price+((cart.price)*(cart.quantity))}                             
                )
                    }
                <div className='cart-footer'>
                   <p className="amount-total">Cart Total Amount:  <span>{price}</span></p>              
                   <button className='place-order'>Place Order</button>                  
                </div>
                </div>
               <a href='/' className="button home">Home</a>
            </div>
        )
    }
}
}

export default Cart;