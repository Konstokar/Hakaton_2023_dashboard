package com.example.atshacaton.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "Person")
@Data
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "username")
    @Size(min = 3, max = 45, message = "Имя должно быть в диапазоне от 3 до 45")
    @NotEmpty(message = "Поле не должно быть пустым")
    private String username;

    @Column(name = "surname")
    @Size(min = 3, max = 45, message = "Фамилия должна быть в диапазоне от 3 до 45")
    @NotEmpty(message = "Поле не должно быть пустым")
    private String surname;

    @Column(name = "secondname")
    @Size(min = 3, max = 45, message = "Фамилия должна быть в диапазоне от 3 до 45")
    private String secondname;

    @Column(name = "lastname")
    @Size(min = 3, max = 45, message = "Отчество должно быть в диапазоне от 3 до 45")
    private String lastname;

    @Column(name = "email")
    @Email
    @NotEmpty(message = "Поле не должно быть пустым")
    private String email;

    @Column(name = "password")
    @NotEmpty(message = "Поле не должно быть пустым")
    private String password;

    @Column(name = "role")
    private String role;

}
