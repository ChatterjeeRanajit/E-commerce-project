import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function VerifyOtp() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const navigate =useNavigate();
    const handleVerifyOtp = async () => {
        try {
            await axios.post('http://localhost:8080/api/verify-otp', null, { params: { email, otp } });
            alert('OTP verified successfully!');
            navigate("/");

        } catch (error) {
            alert("Invalid Otp.");
        }
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />
            <input 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                placeholder="Enter OTP" 
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
    );
}

export default VerifyOtp;