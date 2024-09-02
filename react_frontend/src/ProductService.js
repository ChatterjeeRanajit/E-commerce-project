import axios from 'axios'

const USERS_REST_API_URL = "http://localhost:8080/products/getall";

class ProductService {

    getProduct(){
        return axios.get(USERS_REST_API_URL);
    }

    addProducts(product){
        return axios.post(USERS_REST_API_URL+"/addproduct",product);
    }
    getProductById(id){
        return axios.get("http://localhost:8080/products/getproductbyid"+id);
    }
}

export default new ProductService();