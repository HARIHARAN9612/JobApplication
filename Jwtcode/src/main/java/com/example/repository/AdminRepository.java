package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Admin;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username);
}