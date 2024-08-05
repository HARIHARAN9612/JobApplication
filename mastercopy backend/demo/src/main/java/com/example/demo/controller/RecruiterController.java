package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Recruiter;
import com.example.demo.repository.RecruiterRepository;
import com.example.demo.service.RecruiterService;

import java.util.List;

@RestController
@RequestMapping("/recruiters")
public class RecruiterController {
    @Autowired
    private RecruiterRepository recruiterRepository;

    @PostMapping("/signup")
    public Recruiter createRecruiter(@RequestBody Recruiter recruiter) {
        return recruiterRepository.save(recruiter);
    }

    @PostMapping("/login")
    public Recruiter loginRecruiter(@RequestBody Recruiter recruiter) {
        Recruiter existingRecruiter = recruiterRepository.findByEmail(recruiter.getEmail());
        if (existingRecruiter != null && existingRecruiter.getPassword().equals(recruiter.getPassword())) {
            return existingRecruiter;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}