package com.example.demo.Model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;
    private LocalDate postingDate;
    private LocalDate closingDate;

    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private User recruiter;

    // Getters and Setters
}
