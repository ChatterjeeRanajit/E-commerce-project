package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.EmailService;
import com.example.demo.service.OtpService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class OtpController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/request-otp")
    public ResponseEntity<String> requestOtp(@RequestParam String email) {
        String otp = otpService.generateOtp(email);
        emailService.sendOtpEmail(email, otp);
        return ResponseEntity.ok("OTP sent to email!");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
        boolean isValid = otpService.validateOtp(email, otp);
        if (isValid) {
            return ResponseEntity.ok("OTP verified successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP");
        }
    }
}