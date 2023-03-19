package com.cbr.testTask.controllers;

import com.cbr.testTask.db.Alinke.UsersEntity;
import com.cbr.testTask.dtos.PersonDTO;
import com.cbr.testTask.services.CandidateService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/candidate")
public class CandidateController {
    private final CandidateService candidateService;
    private final ModelMapper modelMapper;

    @Autowired
    public CandidateController(CandidateService candidateService, ModelMapper modelMapper) {
        this.candidateService = candidateService;
        this.modelMapper = modelMapper;
    }

    @GetMapping()
    public List<UsersEntity> getPeople(){
        return candidateService.findAll(); //Jackson автоматически конвертирует в JSON
    }

    @GetMapping("/{id}")
    public UsersEntity getPerson(@PathVariable("id") int id){
        //Статус 200
        return candidateService.findOne(id);
    }

    private PersonDTO convertToPersonDTO(UsersEntity person){
        return modelMapper.map(person, PersonDTO.class);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") int id){
        candidateService.delete(id);
        //Отправляем HTTP ответ с пустым телом и статусом 200
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HttpStatus> update(@PathVariable("id") Long id,
                                             @Valid @RequestBody UsersEntity updateUser){

        candidateService.update(id, updateUser);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
