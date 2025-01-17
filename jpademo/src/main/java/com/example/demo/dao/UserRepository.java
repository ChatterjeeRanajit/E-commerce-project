package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.beans.*;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    public User findByUsername(String username);
}