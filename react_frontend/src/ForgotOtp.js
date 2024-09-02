import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Style.css"
function RegisterOtp() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate =useNavigate();
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const email=sessionStorage.getItem("email");          
            console.log(email);
            await axios.post('http://localhost:8080/api/verify-otp', null, { params: { email, otp } });
            alert('OTP verified successfully!');
                navigate("/api/newpassword");
            
        } catch (error) {
            alert("Invalid Email Id or Otp.");
        }
    };

    return (
        <div className='reg-otp'>
            <h2 className='heading'>Verify OTP</h2>
            <div className="reg-inp">
            <h5>Enter Email Id</h5>
            <input className='reg-input'
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />
            <h5>Enter Your OTP</h5>
            <input className='reg-input'
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                placeholder="Enter your OTP" 
            />
            </div>
            <button onClick={handleVerifyOtp} className="button">VERIFY OTP</button>
        </div>
    );
}

export default RegisterOtp;