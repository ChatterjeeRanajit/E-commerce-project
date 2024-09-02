import axios from 'axios'
const username=sessionStorage.getItem("uid");
const USERS_REST_API_URL = `http://localhost:8080/cart/mycart?username=${username}`;

class CartService {

    getCart(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new CartService();