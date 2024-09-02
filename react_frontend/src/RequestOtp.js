import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Style.css"
function RequestOtp() {
    const [email, setEmail] = useState('');
    const navigate= useNavigate();
    const handleRequestOtp = async () => {
        try {
            sessionStorage.setItem("email",email);
            await axios.post('http://localhost:8080/api/request-otp', null, { params: { email } });
            alert('OTP sent to email!');
            navigate("/api/forgotOtp");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='second-form req-otp-div'>
            <h2 className='heading-reqotp'>Request OTP</h2>
            <input className="second-input"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />
            <button className="button home" onClick={handleRequestOtp}>Request OTP</button>
        </div>
    );
}

export default RequestOtp;