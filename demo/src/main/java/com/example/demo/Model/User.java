package com.example.demo.Model;


import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN, RECRUITER, CANDIDATE

    // Getters and Setters
}

public enum Role {
    ADMIN,
    RECRUITER,
    CANDIDATE
}
