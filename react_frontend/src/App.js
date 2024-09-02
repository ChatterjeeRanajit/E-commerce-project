import React from 'react';
import './App.css';
import ProductComponent from './ProductComponent';
//import { First } from './comp/First';
import Second from './Second';
//import { Third } from './comp/Third';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopCatagory from "./Pages/ShopCatagory"
import Product from "./Pages/Product"
import Shop from "./Pages/Shop";
import RequestOtp from "./RequestOtp"
import VerifyOtp from './VerifyOtp';
import LoginRegister from './LoginRegister';
import NewPassword from "./NewPassword" 
import RegisterOtp from './RegisterOtp';
import Layout from './layout';
import Registration from './Registration';
import ViewEmployeeComponent from './ViewEmployeeComponent';
import EditPro from './EditPro';
import DeleteProduct from "./DeleteProduct";
import Users from "./Users";
import ContactUs from "./ContactUs"
import ForgotOtp from "./ForgotOtp"
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import AboutUs from "./AboutUs";
import UsersMessages from './UsersMessages';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path="products/getall" element={<ProductComponent />}/>                    
          <Route path="products/addproduct" element={<Second />}/>
          <Route path="/contact/messages" element={<UsersMessages/>}/>
          <Route path = "products/getproductbyid" element={<ViewEmployeeComponent />}/>
            <Route path = "/products/editpro/:id" element={<EditPro />}/> 
            <Route path='/products/deleteproduct/:id' element={<DeleteProduct/>}/>
          <Route path="/home" element={<ShopCatagory/>}/>
      <Route path="/mens" element={<ShopCatagory catagory="mens"/>}/>
      <Route path="/womens" element={<ShopCatagory catagory="womens"/>}/>
      <Route path="/kids" element={<ShopCatagory catagory="kids"/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<LoginRegister/>}/> 
      <Route path="/register" element={<Registration/>}/> 
      <Route path="api/login" element={<Login />}/>
      <Route path="/api/users" element={<Users />}/>
      <Route path="/api/registration" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/api/request-otp" element={<RequestOtp/>}/>
      <Route path="/api/verify-otp" element={<VerifyOtp/>}/>
       <Route path="/api/RegisterOtp" element={<RegisterOtp/>}/>
       <Route path="/contactUs" element={<ContactUs/>}/>
       <Route path="/aboutUs" element={<AboutUs/>}/>
       <Route path="/api/forgotOtp"element={<ForgotOtp/>}/>
       <Route path="/api/newpassword" element={<NewPassword/>}/>
      </Routes>
       </BrowserRouter>
    </div>
  );
  }


export default App;