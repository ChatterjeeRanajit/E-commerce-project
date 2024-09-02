package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Contact;
import com.example.demo.dao.ContactRepository;

@Service
public class ContactService {
   @Autowired
   ContactRepository contactRepository;
   
   public void saveMessage(String name,String email,String message) {
	   Contact contact= new Contact();
	   contact.setName(name);
	   contact.setEmail(email);
	   contact.setMessage(message);
	   contactRepository.save(contact);
   }

public List<Contact> getAllContacts() {
	// TODO Auto-generated method stub
	return contactRepository.findAll();
}
public void deleteMessage(Long id) {
	// TODO Auto-generated method stub
	contactRepository.deleteById(id);
}
}
