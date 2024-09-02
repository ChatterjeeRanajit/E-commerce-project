import React from 'react';
import "./Styles/LoginRegister.css"
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LoginRegister = ()=> {

    return (
        
         <div className= ".form-box Login">
            <form action="#" method="post">
                 <h1>Login</h1>
                 <div className='input-box'>
                    <input type='text' placeholder='username' required />
                    <FaUser  className='icon'/>

                 </div>
                 <div className='input-box'>
                    <input type='password' placeholder='password' required />
                    <FaLock className='icon'/>
                 </div>
                 <div className='remember-forgot'>
                    <label><input type="checkbox"/>Remember me</label>
                 <a href='#'>Forgot password?</a>
                 </div>
                 <button type="submit">Login</button>
                 <div className="register-link">
                    <p>Don't have an account?<Link to='/register'>Register</Link></p>
                 </div>
            </form>
         </div>

     
);

};

export default LoginRegister;