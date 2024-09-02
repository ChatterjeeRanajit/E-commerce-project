package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.beans.User;
import com.example.demo.dao.UserRepository;

@Service
public class UserService 
{

    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
   
    public User save(User user) {
        return userRepository.save(user);
    }
    public List<User> getAllUsers(){
    	return userRepository.findAll();
}
    public User addUser(User user) {
    	return userRepository.save(user);
    }

	public User newPassword(User existingUser) {
		// TODO Auto-generated method stub
		return userRepository.save(existingUser);
	}
    

}