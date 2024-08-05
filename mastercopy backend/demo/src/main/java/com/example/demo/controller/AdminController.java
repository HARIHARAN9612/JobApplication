package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.AdminLoginDTO;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public ResponseEntity<String> saveAdminLogin(@RequestBody AdminLoginDTO adminLoginDTO) {
        Admin admin = new Admin();
        admin.setUsername(adminLoginDTO.getUsername());
        admin.setPassword(adminLoginDTO.getPassword());
        adminRepository.save(admin);
        return ResponseEntity.ok("Admin login details saved successfully");
    }
    @GetMapping("/logins")
    public ResponseEntity<List<Admin>> getAllAdminLogins() {
        List<Admin> admins = adminRepository.findAll();
        return ResponseEntity.ok(admins);
    }
}