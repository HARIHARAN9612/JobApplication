package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Recruiter;
import com.example.demo.repository.RecruiterRepository;

import java.util.List;

@Service
public class RecruiterService {
    @Autowired
    private RecruiterRepository recruiterRepository;

    public List<Recruiter> getAllRecruiters() {
        return recruiterRepository.findAll();
    }

    public Recruiter saveRecruiter(Recruiter recruiter) {
        return recruiterRepository.save(recruiter);
    }
}
