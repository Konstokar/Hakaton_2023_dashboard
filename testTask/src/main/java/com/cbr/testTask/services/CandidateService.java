package com.cbr.testTask.services;

import com.cbr.testTask.db.AdditionalCompetitionEntity;
import com.cbr.testTask.db.CandidateToAdditionalCompetitionEntity;
import com.cbr.testTask.db.CandidatesEntity;
import com.cbr.testTask.db.SkillsEntity;
import com.cbr.testTask.repo.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidateService {
    private final CandidateRepository candidateRepository;

    public List<CandidatesEntity> findByCompetitionId(long id){
        return candidateRepository.findAll().stream()
                .filter(candidatesEntity -> {
                    for (CandidateToAdditionalCompetitionEntity ace : candidatesEntity.getAdditionalCompetitionId()){
                        if (ace.getAdditionalId().getId() == id)
                            return true;
                    }
                    return false;
                }).collect(Collectors.toList());
    }

    public void create(CandidatesEntity candidates){
        candidateRepository.save(candidates);
    }
}
