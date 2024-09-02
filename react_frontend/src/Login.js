import React, { useState} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import "./Style.css"
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try 
        {
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
    
            console.log(response.data); // Handle successful login

            if (response.data == 'Login successful' && username=="rockranajit2003@gmail.com" && password=="1234")
            {
                console.log(username);
                sessionStorage.setItem('uid', username);
                navigate('/');
            }
            else if(response.data == 'Login successful'){
                sessionStorage.setItem('uid', username);
                navigate('/');
            }
        
        } catch (error) {
            //console.error('Login failed:', error.response.data);

            e.preventDefault();
            alert("Invalid Username or Password")
            setMessage('Invalid id/pwd');
        }    
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <div className='login-form'>
            <form onSubmit={handleSubmit} className='form'>
                {message && <p>{message}</p>}
                <input type="email" className="input" placeholder="Enter your Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="input" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className='button form-btn'>Login</button>
                <span>Don't have an account? <Link to="/api/registration">Register</Link></span>
                <p ><Link className="button submit"to="/api/request-otp">Forgot Password?</Link></p>
            </form>
            
            </div>
        </div>
    );
}

export default Login;