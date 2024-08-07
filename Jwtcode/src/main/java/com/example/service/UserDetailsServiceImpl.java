package com.example.service;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.model.Admin;
import com.example.model.Candidate;
import com.example.model.Recruiter;
import com.example.repository.AdminRepository;
import com.example.repository.CandidateRepository;
import com.example.repository.RecruiterRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final CandidateRepository candidateRepository;
    private final RecruiterRepository recruiterRepository;
    private final AdminRepository adminRepository;

    public UserDetailsServiceImpl(CandidateRepository candidateRepository, RecruiterRepository recruiterRepository, AdminRepository adminRepository) {
        this.candidateRepository = candidateRepository;
        this.recruiterRepository = recruiterRepository;
        this.adminRepository = adminRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Candidate> candidate = candidateRepository.findByUsername(username);
        if (candidate.isPresent()) {
            return new org.springframework.security.core.userdetails.User(candidate.get().getUsername(), candidate.get().getPassword(), new ArrayList<>());
        }
        Optional<Recruiter> recruiter = recruiterRepository.findByUsername(username);
        if (recruiter.isPresent()) {
            return new org.springframework.security.core.userdetails.User(recruiter.get().getUsername(), recruiter.get().getPassword(), new ArrayList<>());
        }
        Optional<Admin> admin = adminRepository.findByUsername(username);
        if (admin.isPresent()) {
            return new org.springframework.security.core.userdetails.User(admin.get().getUsername(), admin.get().getPassword(), new ArrayList<>());
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
