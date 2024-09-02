import React, { useEffect, useState } from 'react';
import ProductService from './ProductService';
import "./Style.css"
import MessageService from './MessageService';
import CartService from './CartService';
import axios from 'axios';
var price=0;
function DeleteProduct(result){
   // const[data,setData]=useState([]);
   // setData(result);
  useEffect(async ()=>{
    //setData(result);
   getData();
},[]);
}
async function deleteOp(e,id){
    e.preventDefault();
    console.log(id);
 let result=await fetch(`http://localhost:8080/contact/delete/${id}`, {
       method:'DELETE'
    });
  //  let result=await axios.delete("http://localhost:8080/cart/deteteproduct/"+id);
   // result= await result.json();
   alert("Message Deleted Successfully.Refresh the page to show original Messages.");
   console.warn(result);
   getData();
}
const username=sessionStorage.getItem("uid");
async function getData(){
    let result=await fetch(`http://localhost:8080/contact/getall`);
    result= await result.json();
   // DeleteProduct(result);
}
class UsersMessages extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contact:[]
        }
    }
    componentDidMount(){
        MessageService.getMessage().then((response) => {
            this.setState({ contact: response.data})
        });
    }
    
    render (){
        {
            const mystyle = {
              color: "white",
              backgroundColor: "red",
              border:"2px solid black",
              borderRadius:"7px",
              padding: "10px",
              fontFamily: "Arial"
            };
        return (
            <div>
                <h1 className = "text-center"> Mesages List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Contact Id</td>
                            <td> Username</td>                      
                            <td> User Email </td>
                            <td> Message</td>
                            <td>Delete Message</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contact.map(
                                contact => 
                                <tr key = {contact.id}>
                                     <td> {contact.id}</td>   
                                     <td> {contact.name}</td>  
                                     <td> {contact.email} </td>
                                     <td> {contact.message} </td> 
                                     <td className='delete'><span style={mystyle} onClick={(e)=>deleteOp(e,contact.id)}>Remove Item</span></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
               <a href='/' className="button home">Home</a>
            </div>
        )
    }
}

}
export default UsersMessages;