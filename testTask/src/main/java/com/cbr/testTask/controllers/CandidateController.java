package com.cbr.testTask.controllers;

import com.cbr.testTask.db.CandidatesEntity;
import com.cbr.testTask.repo.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/candidate")
@RequiredArgsConstructor
public class CandidateController {
    private final CandidateRepository candidateRepository;

    @GetMapping("/all")
    public List<CandidatesEntity> findAll(){
        return null;
    }
}
