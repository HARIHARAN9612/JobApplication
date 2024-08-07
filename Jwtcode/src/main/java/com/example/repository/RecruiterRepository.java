package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Recruiter;

import java.util.Optional;

public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
    Optional<Recruiter> findByUsername(String username);
}