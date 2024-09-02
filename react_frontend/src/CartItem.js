import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartItem = ({ item }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`/api/products/${item.productId}`)
            .then(response => {
                setProduct(response.data);
            });
    }, [item.productId]);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Quantity: {item.quantity}</p>
        </div>
    );
};

export default CartItem;