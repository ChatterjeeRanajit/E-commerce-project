package com.example.demo.beans;

import java.util.Optional;

import jakarta.persistence.*;

@Entity
public class Cart {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer pid;
    private String username;
    private Integer quantity;
    @Column(name="pname")
    private String productName;
   private Integer price;
    @Lob
	@Column(name="image", columnDefinition="MEDIUMBLOB")
	private byte[] image;
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public Integer getPrice() {
	return price;
}
public void setPrice(Integer price) {
	this.price = price;
}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public void setPid(Optional<Product> product) {
		// TODO Auto-generated method stub
		
	}
}