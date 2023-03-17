package com.example.atshacaton.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "candidate")
@Data
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "middle_name")
    private String middleName;



}
