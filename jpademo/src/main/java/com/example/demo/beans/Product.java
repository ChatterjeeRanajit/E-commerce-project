package com.example.demo.beans;


import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
@Entity
public class Product 
{
	@Id
	@Column(name="pid")
	private Integer ProductId;
	
	@Column(name="pname")
	private String ProductName;
	@Column(name="qty")
	private Integer qty;
	@Column(name="price")
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
	@Column
	private String filename;
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public Integer getProductId() {
		return ProductId;
	}
	public void setProductId(Integer productId) {
		ProductId = productId;
	}

	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public Integer getQty() {
		return qty;
	}
	public void setQty(Integer qty) {
		this.qty = qty;
	}

	
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	
	public Product(Integer productId, String productName, Integer qty,Integer price, byte[] image,String filename) {
		super();
		ProductId = productId;
		ProductName = productName;
		this.qty = qty;
		this.price=price;
		this.image=image;
		this.filename=filename;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Product [ProductId=" + ProductId + ", ProductName=" + ProductName + ", qty=" + qty + ",price="+price+",image="+image+",filename="+filename+"]";
	}
	
}

	
	
