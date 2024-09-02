// src/components/AddToCart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  const[cartId,setCartId]=useState('');
  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (productId) => {
    axios.post(`/api/cart/${cartId}/add/${productId}`)
      .then(response => console.log('Product added to cart:', response.data))
      .catch(error => console.error('Error adding to cart:', error));
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;

