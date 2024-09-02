import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "./Style.css"

function ViewEmployeeComponent() {
  const [id, setId] = useState('');
  //const [pid, setPId] = useState('');
  const [data, setData] = useState(null);
  

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/products/getproductbyid' + id); // Replace with your actual backend URL
      setData(response.data);
      //setPId(response.data.productId);
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} clsssName="second-form">
        <h2>Search Product</h2>
        <hr/>
        <label>
         <h3>Enter Id</h3><hr/>
          <input type="text" className="second-input"value={id} onChange={handleChange} />
        </label>
        <button type="submit" className="button">Find</button>
      </form>
      {data && (
        <div>
          
          
          <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> Product qty</td>
                            <td> Product Price</td>
                            <td> Product Image</td>
                            <td> Edit Product</td>
                        </tr>

                    </thead>

                    <tbody>
                         
                                <tr key = {data.productId}>
                                     <td> {data.productId}</td>   
                                     <td> {data.productName}</td>   
                                     <td> {data.qty}</td>  
                                     <td> {data.price}</td>   
                                     <td>{data.image && <img src={`data:image/jpeg;base64,${data.image}`} alt="image" height="80" width="80"/>}</td>
                                     <td> <NavLink to={`/products/editpro/${data.productId}`}>
                                      <button className="button home">edit</button>
                                      </NavLink></td>
                                </tr>           
                        

                    </tbody>
                </table>
                <a href="/" className="button home">Home</a>
        </div>
      )}

      
    </div>

    
  );
}

export default ViewEmployeeComponent;