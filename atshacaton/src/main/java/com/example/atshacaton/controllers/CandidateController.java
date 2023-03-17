package com.example.atshacaton.controllers;


import com.example.atshacaton.services.CandidateService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/candidate")
@RequiredArgsConstructor
public class CandidateController {
    private final CandidateService candidateService;

    @GetMapping("/all")
    public String getAll(Model model){
        model.addAttribute("candidates", candidateService.findAll());
        return "candidate/allCandidates";
    }
}
