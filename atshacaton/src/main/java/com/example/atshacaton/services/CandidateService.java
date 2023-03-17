package com.example.atshacaton.services;

import com.example.atshacaton.entities.Candidate;
import com.example.atshacaton.repositories.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CandidateService {
    private final CandidateRepository candidateRepository;

    public List<Candidate> findAll(){
        return candidateRepository.findAll();
    }

    public Candidate findOne(long id){
        Optional<Candidate> foundCandidate = candidateRepository.findById(id);
        return foundCandidate.orElse(null);
    }

    @Transactional
    public void save(Candidate candidate){
        candidateRepository.save(candidate);
    }
    @Transactional
    public void update(long id, Candidate updareCandidate){
        updareCandidate.setId(id);
        candidateRepository.save(updareCandidate);
    }
    @Transactional
    public void delete(long id){
        candidateRepository.deleteById(id);
    }
    public Optional<Candidate> getBuSurName(String middleName){
        return candidateRepository.findByMiddleName(middleName);
    }
}
