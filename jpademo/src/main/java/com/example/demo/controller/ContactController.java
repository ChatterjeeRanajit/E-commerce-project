package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Contact;
import com.example.demo.service.ContactService;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
  @Autowired
  ContactService contactService;
  @PostMapping(value="/sendMessage")
  public String contactMessage(@RequestParam String name,@RequestParam String email,@RequestParam String Message) {
	  contactService.saveMessage(name, email, Message);
	  return "message send successfully";
  }
  @GetMapping(value="/getall")
  public List<Contact> GetMessage() {
  return contactService.getAllContacts();
}
  @DeleteMapping(value="/delete/{id}")
  public String DeleteMessage(@PathVariable Long id){
	  contactService.deleteMessage(id);
	  return "message deleted successfully";
  }
}