package com.example.atshacaton.repositories;

import com.example.atshacaton.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PeopleRepositories extends JpaRepository<Person, Long> {
    Optional<Person> findBySurname(String surname);
}
