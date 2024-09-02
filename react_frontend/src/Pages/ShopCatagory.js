import React from "react"
import { useState } from "react"
import  "../Style.css"
import { Link } from "react-router-dom"
import cart from '../Components/Assets/cart-icon.png'
import logo from "../Components/Assets/logo.jpg"
 const ShopCatagory =()=>{
    const [menu,setMenu]=useState("");
    return (
        <>
          <div className="navbar">
            <div className="nav-logo">
                 <img id="nav-logo" src={logo} alt="img"/>
                 <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to="/shop">Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/api/Login"><button className="btn-login">Login</button></Link>
             <Link to="/cart"> <img id="cart-icon" src={cart} alt="img" /></Link>
               <div className="nav-cart-count">0</div>
            </div>
          </div>
        </>
    )
}
export default ShopCatagory;