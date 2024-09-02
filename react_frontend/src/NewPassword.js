import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewPassword =()=>{
    const [password,setPassword]=useState('');
    const [rePassword,setRePassword]=useState('');
    const navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
    if(password.length>=8 && password.match(rePassword)){
       const username= sessionStorage.getItem("email");
       const formData= new FormData();
       formData.append("username",username);
       formData.append("password",password);
       console.log(username,password);
       try{
       await axios.put("http://localhost:8080/api/forgotPassword",formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
       });
       alert("Password changed successflly.");
        navigate("/api/login");
       }
       catch(error){
        console.log(error);
        alert(error);
       }
    }
    else{
        alert("password should be minimum 8 character and it must match with re-entered password");
    }
}
return(
    <>
    <form onSubmit={handleSubmit} className="second-form"  >
    <div>
      <label>Enter Your New Password</label>
      <input type="password" className="second-input"  value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div>
      <label>Re-enter Your New Password</label>
      <input type="password" className="second-input"   value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
    </div>
    <button type="submit" className='submit'>Submit</button>
  </form>
  <a className="button home" href="/">Home</a>
  </>
)
}
export default NewPassword;