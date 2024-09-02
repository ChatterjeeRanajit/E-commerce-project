package com.example.demo.service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.beans.Product;
import com.example.demo.dao.ProductRepository;
import com.example.demo.exception.ResourceNotFoundException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@Service
public class ProductService {

	final ProductRepository productRepository;
	private final Path root =Paths.get("uploads");
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
        try {
        	Files.createDirectories(root);
        }
        catch(IOException e) {
        	throw new RuntimeException("could not initialize folder for upload");
        }
        }
	public List<Product> getAllProducts()
	{
		return productRepository.findAll();	
	}	
	public Product addProduct(Integer ProductId, String ProductName, Integer qty,Integer price, MultipartFile file) throws IOException {
       
		Product p = new Product();
		 p.setImage(file.getBytes());
		p.setPrice(price);
		p.setProductId(ProductId);
		p.setProductName(ProductName);
		p.setQty(qty);
		p.setFilename(null);
        productRepository.save(p);
        return p;
	}
    
	public Product getProduct(Integer productId) {
		Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException(+productId+": this product is not availabe"));
		return product;
		}
	public Product UpdateProduct(Integer ProductId, String ProductName, Integer qty,Integer price, MultipartFile file) throws IOException {
	       
			Product p = new Product();
			 p.setImage(file.getBytes());
			p.setPrice(price);
			p.setProductId(ProductId);
			p.setProductName(ProductName);
			p.setQty(qty);
			p.setFilename(null);
	        productRepository.save(p);
	        return p;
		}
	public void deleteProduct(int product_id ) {
		Product byId=productRepository.findById(product_id).orElse(null);
		productRepository.delete(byId);
	}
	
}
