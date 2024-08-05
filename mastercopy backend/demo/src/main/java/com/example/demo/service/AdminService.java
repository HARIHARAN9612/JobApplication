package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminService {
@Autowired
private AdminRepository adminRepository;

public List<Admin> getAllAdmins()
{
    return adminRepository.findAll();
}
public Admin saveAdmin(Admin admin) {
    return adminRepository.save(admin);
}
}
