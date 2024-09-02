import React from 'react';
import "./Styles/LoginRegister.css"
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Registration =()=>{
      const [email, setEmail] = useState('');
      const[password,setPassword]=useState('');
      const navigate= useNavigate();
      sessionStorage.setItem("email",email)
      const handleRequestOtp = async (e) => {
         e.preventDefault();
          try {
            const passlen=password.length;
            console.log(email,password);
              sessionStorage.setItem("email",email);
              sessionStorage.setItem("password",password);
              if(passlen < 8){
               alert("Password must be minimum 8 characters");
               return;
           }
              await axios.post('http://localhost:8080/api/request-otp', null, { params: { email } });
              alert('OTP sent to email!');
              navigate("/api/RegisterOtp");
              console.log(sessionStorage.getItem("email"));
          } catch (error) {
              alert(error.message);
          }
      };
    return(
        <div className= ".form-box Register">
        <form onSubmit={handleRequestOtp}>
             <h1>Registration</h1>
            
             <div className='input-box'>
             <input type="email" placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                <FaUser  className='icon'/>

             </div>
             <div className='input-box'>
             <input type="password" placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} required/>
                <FaLock className='icon'/>
             </div>
             <div className='remember-forgot'>
                <label><input type="checkbox"/>I agree to the terms & conditions</label>
             
             </div>
             <button type="submit">Register</button>
             <div className="register-link">
                <p>Already have an account?<Link to="/api/login">Login</Link></p>
             </div>
        </form>
     </div>

    );
}
export default Registration;