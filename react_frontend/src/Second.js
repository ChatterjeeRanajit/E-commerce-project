import React, { useState } from 'react';
import axios from "axios";
function Second() {
  const [ProductId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState('');
  const [imgurl, setImgurl] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('ProductId', ProductId);
    formData.append('productName',productName);
    formData.append('qty',qty);
    formData.append('price',price);
    formData.append('image',imgurl);
    
    try {
      
      const response = await axios.post('http://localhost:8080/products/addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product uploaded successfully:', response.data);
    } catch (error) {
      alert('Error uploading product:', error.message);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='second-form'>

    <div>
      <label>Product id:</label>
      <input type="text" className="second-input" value={ProductId} onChange={(e) => setProductId(e.target.value)} />
    </div>
    <div>
      <label>Product Name:</label>
      <input type="text"className="second-input"  value={productName} onChange={(e) => setProductName(e.target.value)} />
    </div>
    <div>
      <label>Qty:</label>
      <input type="text" className="second-input"value={qty} onChange={(e) => setQty(e.target.value)} />
    </div>
    <div>
      <label>Price:</label>
      <input type="number"className="second-input"  value={price} onChange={(e) => setPrice(e.target.value)} />
    </div>
    <div>
      <label>Image:</label>
      <input type="file"className="second-input"  onChange={(e) => setImgurl(e.target.files[0])} />
    </div>
    <button type="submit" className="button submit">Submit</button>
  </form>
  <a href="/" className="button home">Home</a>
  </>
);
};

export default Second;