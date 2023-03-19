package com.cbr.testTask.db.Alinke;

import com.cbr.testTask.db.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "users")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsersEntity extends BaseEntity {
    @Column(name = "username")
    @NotEmpty(message = "")
    private String username;
    @Column(name = "email")
    @NotEmpty
    @Email
    private String email;
    @Column(name = "password")
    @NotEmpty
    private String password;
    @Column(name = "phone_number")
    @NotEmpty
    private String phoneNumber;
}
