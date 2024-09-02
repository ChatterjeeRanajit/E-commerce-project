package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.beans.Cart;
import com.example.demo.beans.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
   public List<Cart> findByUsername(String username);

	
}