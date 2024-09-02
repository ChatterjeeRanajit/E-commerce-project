package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.beans.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
   
    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public String addToCart(@RequestParam String username, @RequestParam Integer pid ,@RequestParam Integer quantity,@RequestParam String productName,@RequestParam Integer price) throws IOException {
        cartService.addToCart(username,pid,quantity,productName,price);
        return "Product added to cart";
    }
    @GetMapping("/mycart")
    	public List<Cart> myCart(String username) {
    		return cartService.getUserCart(username);
    		
    	}
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(value="/deleteproduct/{id}")
    public String deleteFromCart(@PathVariable Long id)
    {
    	cartService.deleteFromCart(id);
		return "product removed from cart successfully";   	
    }
}
