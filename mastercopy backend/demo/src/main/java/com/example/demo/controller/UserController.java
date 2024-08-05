package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/candidates")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return existingUser;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
