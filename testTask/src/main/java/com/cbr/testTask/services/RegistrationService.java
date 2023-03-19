package com.cbr.testTask.services;

import com.cbr.testTask.db.Alinke.UsersEntity;
import com.cbr.testTask.repo.CandidateRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class RegistrationService {
    private final CandidateRepositories peopleRepositories;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public RegistrationService(CandidateRepositories peopleRepositories, PasswordEncoder passwordEncoder) {
        this.peopleRepositories = peopleRepositories;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public void register(UsersEntity person){

        person.setPassword(passwordEncoder.encode(person.getPassword()));
        peopleRepositories.save(person);
    }
}
