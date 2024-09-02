package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.beans.Cart;
import com.example.demo.beans.Product;
import com.example.demo.beans.User;
import com.example.demo.dao.CartRepository;
import com.example.demo.dao.ProductRepository;
import com.example.demo.dao.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    ProductRepository productRepository;
	private final Path root =Paths.get("uploads");
    public void ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
        try {
        	Files.createDirectories(root);
        }
        catch(IOException e) {
        	throw new RuntimeException("could not initialize folder for upload");
        }
        }
    @Transactional
    public void addToCart(String username, Integer pid,Integer quantity,String productName,Integer price ) throws IOException {
        User user = userRepository.findByUsername(username);
        Optional<Product> product = productRepository.findById(pid);

        Cart cart = new Cart();
        cart.setUsername(username);
        cart.setPid(pid);
        cart.setQuantity(quantity);
        cart.setProductName(productName);
        cart.setPrice(price);
       // cart.setImage(image.getBytes());
        System.out.print("....product-->"+product+"....user:->"+user);
        cartRepository.save(cart);
    }

    public List<Cart> getUserCart(String username) {
        
    		List<Cart> cart =  cartRepository.findByUsername(username); 
    		  cartRepository.saveAll(cart);
    		  return cart;
    }
    public void deleteFromCart(Long id) {
    	cartRepository.deleteById(id);
    }
}
