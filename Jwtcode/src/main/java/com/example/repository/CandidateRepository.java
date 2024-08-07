package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Candidate;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    Optional<Candidate> findByUsername(String username);
}