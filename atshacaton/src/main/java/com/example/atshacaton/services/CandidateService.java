package com.example.atshacaton.services;

import com.example.atshacaton.entities.Candidate;
import com.example.atshacaton.repositories.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidateService {
    private final CandidateRepository candidateRepository;

    public List<Candidate> findAll(){
        return candidateRepository.findAll();
    }


}
