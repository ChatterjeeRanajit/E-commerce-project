import React from 'react';
//import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import ProductService from './ProductService'
import { useState ,useEffect} from "react";
function DeleteProduct(result){
    const[data,setData]=useState([]);
useEffect(async ()=>{
    //setData(result);
   getData();
},[]);

async function deleteOp(productId){
    alert(productId);
  let result=await fetch("http://localhost:8080/products/deteteproduct/"+productId, {
        method:'DELETE'
    });
   result= await result.json();
   console.warn(result);
   getData();
}

async function getData(){
    let result=await fetch("http://localhost:8080/products/getall");
    result= await result.json();
    setData(result);
}
}
export default DeleteProduct;
