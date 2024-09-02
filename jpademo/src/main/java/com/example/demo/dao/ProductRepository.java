package com.example.demo.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import com.example.demo.beans.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
public Optional<Product> findById(Integer productId);

}
