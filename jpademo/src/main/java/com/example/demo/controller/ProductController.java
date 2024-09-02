package com.example.demo.controller;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.beans.Product;
import com.example.demo.service.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController 
{
	@Autowired
	ProductService productService;
	@GetMapping(value= "/getall")
	public List<Product> getAllProducts()
	{
		return productService.getAllProducts();
	}
	@GetMapping(value= "/getproductbyid{id}")
	public Product getProduct(@PathVariable("id") Integer id)
	{
		return productService.getProduct(id);
	}
	@PostMapping(value = "/addproduct")
	 public Product addProduct(@RequestParam("ProductId") Integer ProductId,
             @RequestParam("productName") String ProductName,
             @RequestParam("qty") Integer qty,
             @RequestParam("price") Integer price,
             @RequestParam("image" ) MultipartFile image
            ) throws IOException {
		System.out.print(ProductId);

         return productService.addProduct(ProductId, ProductName, qty,price, image);

}
	

	
	
		
		
	@PutMapping(value = "/updateproduct")
	public Product updateProduct(@RequestParam("ProductId") Integer ProductId,
            @RequestParam("productName") String ProductName,
            @RequestParam("qty") Integer qty,
            @RequestParam("price") Integer price,
            @RequestParam("image" ) MultipartFile image
           ) throws IOException {
		System.out.print(ProductId);

        return productService.UpdateProduct(ProductId, ProductName, qty,price, image);	
	}
	@DeleteMapping(value="/deteteproduct/{product_id}")
	public void deleteProduct(@PathVariable int product_id) {
		productService.deleteProduct(product_id);
	}
}