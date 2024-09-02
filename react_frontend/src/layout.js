import { Outlet, Link } from "react-router-dom";
import React from "react"
import { useState , useEffect} from "react"
import  "./Style.css"
import cart from './Components/Assets/cart-icon.png'
import logo from "./Components/Assets/logo.jpg"
import users from "./Components/Assets/users.png"
import { useNavigate } from "react-router-dom";
import display from "./Components/Assets/displayProduct.png"
import editproduct from "./Components/Assets/editproduct.jpg"
import addproduct from "./Components/Assets/NewAddProduct.png"
import searchproduct from "./Components/Assets/searchproduct.jpg"
import HomeProduct from "./HomeProduct";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Users from "./Users"
const Layout = () => {
  const [menu,setMenu]=useState("Display Product");
  const [data, setData] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
     // On component mount, check if data exists in session storage
    const storedData = sessionStorage.getItem('uid');
    if (storedData) {
      setData(storedData);
    }
  }, []);
  if(data==="rockranajit2003@gmail.com"){
  return (
    <>
      <h1 className="welcome">WELCOME ADMIN</h1>
      <div className="navbar absolute">
            <div className="nav-logo">
                 <img id="nav-logo" src={logo} alt="img"/>
                 <p>SHOPPER</p>
                 <p><button className="users-msg"><Link to="/contact/messages" className="a-usermsg">Users Mesages</Link></button></p>
            </div>
            <ul className="nav-menu">
                  <li className="logout" onClick={()=>{
                    sessionStorage.removeItem("uid");
                    navigate("/api/Login");
                  }}> Logout </li>            
            </ul>
           
        {/*  <h2>{data}</h2>
          <div className="nav-login-cart">
                <Link to="/login"><button className="btn-login">Login</button></Link>
             <Link to="/cart"> <img id="cart-icon" src={cart} alt="img" /></Link>
               <div className="nav-cart-count">0</div>
            </div> */}
    <div className="cards"> 
    <div className="card">
      <div className="image">
        <img src={display} alt="image"/>
      </div>
      <div className="button">
          <button className="btn"><Link to="/products/getall">Display Products</Link></button>
      </div>

    </div>
    <div className="card">
      <div className="image">
        <img src={addproduct} alt="image"/>
      </div>
      <div className="button">
          <button className="btn"><Link to="/products/addproduct">Add Product</Link></button>
      </div>

    </div>
    <div className="card">
      <div className="image">
        <img src={editproduct} alt="image"/>
      </div>
      <div className="button">
          <button className="btn"><Link to="/products/editpro/:id">Edit product</Link></button>
      </div>

    </div>
    <div className="card">
      <div className="image">
        <img src={searchproduct} alt="image"/>
      </div>
      <div className="button">
          <button className="btn"><Link to="products/getproductbyid">Search Product</Link></button>
      </div>

    </div>
    <div className="card">
      <div className="image">
        <img src={users} alt="image"/>
      </div>
      <div className="button">
          <button className="btn"><Link to="/api/users">Display Users</Link></button>
      </div>

    </div>
    </div> 
    </div>
      <Outlet />
    </>
  )
}
else if(data){
  return (
    <>
      <div className="navbar">
            <div className="nav-logo">
                 <img id="nav-logo" src={logo} alt="img"/>
                 <p>SHOPPER</p>
            </div>
            
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link to="/aboutUs">About Us</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to="/contactUs">Contact Us</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <p> <span className="nav-username"> welcome {data}</span></p>
            <div className="nav-login-cart">
            <Link to="/api/login"><button className="btn-login btn-logout" onClick={()=>{
                    sessionStorage.removeItem("uid");
                    navigate("/api/Login");}}>Logout</button></Link>
             <Link to="/cart"> <img id="cart-icon" src={cart} alt="img" /></Link>
               <div className="nav-cart-count">0</div>
            </div>           
            </div>
            <div className="products">
                <HomeProduct/>
            </div>
      <Outlet />
    </>
  )
}
else{
   return(
    <>
    <div className="navbar">
          <div className="nav-logo">
               <img id="nav-logo" src={logo} alt="img"/>
               <p>SHOPPER</p>
          </div>
          <ul className="nav-menu">
              <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{ menu==="shop"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("mens")}}><Link to="/aboutUs">About Us</Link>{menu==="mens"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("womens")}}><Link to="/ContactUs">ContactUs</Link>{menu==="womens"?<hr/>:<></>}</li>
              
          </ul>
          <div className="nav-login-cart">
              <Link to="/api/login"><button className="btn-login">Login</button></Link>
           <Link to="/cart"> <img id="cart-icon" src={cart} alt="img" /></Link>
             <div className="nav-cart-count">0</div>
          </div>
        </div>
        <div className="products">
                <HomeProduct/>
            </div>
    <Outlet />
  </>
   )
}
};

export default Layout;