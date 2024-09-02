import React,{useState} from 'react';
import "./index.css";
import "./Style.css"
import axios from "axios"
const ContactUs = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const user=sessionStorage.getItem("uid");
   const contact=async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("Message",message);
    if(user===email){
    try{
      const sendData = await axios.post('http://localhost:8080/contact/sendMessage',formData,{
           headers: {
               'Content-Type': 'multipart/form-data',
             }
       })
           .then(response => {
               alert("Message Send Successfully.We'll further contact you through email. Thank you for contacting us.");
               console.log('Message send to db.', response.data);
           });
           document.getElementById("name").value="";
           document.getElementById("email").value="";
           document.getElementById("message").value="";
       }
       catch(error){
           console.log(error);
       }
      }
      else{
        alert("Please Enter Current Logged in Email id.")
      }
   }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 second-form">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We would love to hear from you!
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" from name="name" type="text" autoComplete="name" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" placeholder="Send Message" onClick={contact}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 button submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      
          <a href="/" className="button home">Home</a>
  
    </div>
  );
}

export default ContactUs;