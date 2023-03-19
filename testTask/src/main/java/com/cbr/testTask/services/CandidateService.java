package com.cbr.testTask.services;

import com.cbr.testTask.db.Alinke.UsersEntity;
import com.cbr.testTask.repo.CandidateRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class CandidateService {
    private final CandidateRepositories candidateRepositories;

    @Autowired
    public CandidateService(CandidateRepositories candidateRepositories) {
        this.candidateRepositories = candidateRepositories;
    }

    public List<UsersEntity> findAll(){
        return candidateRepositories.findAll();
    }
    public UsersEntity findOne(int id){
        return candidateRepositories.findById(id).orElse(null);
    }

    @Transactional
    public void save(UsersEntity person){
        candidateRepositories.save(person);
    }

    @Transactional
    public void update(Long id, UsersEntity updatePerson){
        updatePerson.setId(id);
        candidateRepositories.save(updatePerson);
    }

    @Transactional
    public void delete(int id){
        candidateRepositories.deleteById(id);
    }

    public Optional<UsersEntity> getPersonByUsername(String username){
        return candidateRepositories.findByUsername(username);
    }
}
