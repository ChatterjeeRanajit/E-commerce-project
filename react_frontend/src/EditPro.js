import React from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import ProductService from './ProductService'
import { useState ,useEffect} from "react";
import "./Style.css"
//import { useNavigate} from 'react-router-dom';



function EditPro() {
  const [data, setData] = useState(null);
  const {id} = useParams();
  
  const [ProductId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState('');
  const [imgurl, setImgurl] = useState(null);
  const navigate = useNavigate();

  //console.log(id);

  useEffect(()=>{
    getProData();
  },[])

  const getProData=async()=>{
    let response = await ProductService.getProduct(id);
    console.log(response)
    setData(response.data);
}



    //const handleChange = (e) => {
    //setId(e.target.value);
    //};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('ProductId', ProductId);
    formData.append('productName',productName);
    formData.append('qty',qty);
    formData.append('price',price);
    formData.append('image',imgurl);
    const response = await axios.put('http://localhost:8080/products/updateproduct',formData,{
      
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response);
    alert("Product Updated Sucessfully.")
    navigate('/');

  }

  return (
    <>
    <form onSubmit={handleSubmit} className="second-form"  >
    <div>
      <label>Product id:</label>
      <input type="text" className="second-input"  value={ProductId} onChange={(e) => setProductId(e.target.value)} />
    </div>
    <div>
      <label>Product Name:</label>
      <input type="text" className="second-input"   value={productName} onChange={(e) => setProductName(e.target.value)} />
    </div>
    <div>
      <label>Qty:</label>
      <input type="text" className="second-input"   value={qty} onChange={(e) => setQty(e.target.value)} />
    </div>
    <div>
      <label>Price:</label>
      <input type="number" className="second-input"  value={price} onChange={(e) => setPrice(e.target.value)} />
    </div>
    <div>
      <label>Image:</label>
      <input type="file" className="second-input"    onChange={(e) => setImgurl(e.target.files[0])} />
    </div>
    <button type="submit" className='submit'>Submit</button>
  </form>
  <a className="button home" href="/">Home</a>
  </>
);
};
   

export default EditPro;