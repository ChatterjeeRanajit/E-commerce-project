import React, { useEffect, useState } from 'react';
import ProductService from './ProductService';
import "./Style.css"

function DeleteProduct(result){
    const[data,setData]=useState([]);
    setData(result);
useEffect(async ()=>{
    //setData(result);
   getData();
},[]);
}
async function deleteOp(productId){
    alert(productId+" is now deleted.Refresh the page to show actual products.");
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
    DeleteProduct(result);
}
class ProductComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            product:[]
        }
    }
    componentDidMount(){
        ProductService.getProduct().then((response) => {
            this.setState({ product: response.data})
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
                <h1 className = "text-center"> Product List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Product Id</td>
                            <td> Product Name</td>
                            <td> Product qty</td>
                            <td> Product price</td>
                            <td> Product image</td>
                            <td> Delete Product</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.product.map(
                                product => 
                                <tr key = {product.productId}>
                                     <td> {product.productId}</td>   
                                     <td> {product.productName}</td>   
                                     <td> {product.qty}</td> 
                                     <td>{product.price}</td> 
                                     <td>{product.image && <img src={`data:image/jpeg;base64,${product.image}`} alt={product.productName} height="80" width="80"/>}</td>
                                     <td className='delete'><span onClick={()=>deleteOp(product.productId)} style={mystyle}>Delete</span></td>
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

export default ProductComponent;