package com.example.demo.service;


import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class OtpService {

    private Map<String, String> otpData = new HashMap<>();

    public String generateOtp(String email) {
        String otp = String.valueOf(new Random().nextInt(999999));
        otpData.put(email, otp);
        return otp;
    }

    public boolean validateOtp(String email, String otp) {
        return otp.equals(otpData.get(email));
    }
}