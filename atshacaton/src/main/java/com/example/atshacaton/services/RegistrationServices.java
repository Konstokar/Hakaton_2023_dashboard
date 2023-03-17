package com.example.atshacaton.services;

import com.example.atshacaton.model.Person;
import com.example.atshacaton.repositories.PeopleRepositories;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RegistrationServices {
    private final PeopleRepositories peopleRepositories;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void register(Person person){

        person.setPassword(passwordEncoder.encode(person.getPassword()));
        person.setRole("ROLE_USER");
        peopleRepositories.save(person);
    }
}
