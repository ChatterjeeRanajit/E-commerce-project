package com.example.demo.payload;

import jakarta.persistence.Column;

public class ProductDto {
	private Integer ProductId;	
	private String ProductName;
	private Integer qty;
	public ProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductDto(Integer productId, String productName, Integer qty) {
		super();
		ProductId = productId;
		ProductName = productName;
		this.qty = qty;
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

}
