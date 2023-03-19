package com.cbr.testTask.services;

import com.cbr.testTask.db.Alinke.ProfessionEntity;
import com.cbr.testTask.repo.ProfessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ProfessionService {
    private final ProfessionRepository professionRepository;

    @Autowired
    public ProfessionService(ProfessionRepository professionRepository) {
        this.professionRepository = professionRepository;
    }

    public List<ProfessionEntity> findAllProfession(){
        return professionRepository.findAll();
    }

    public ProfessionEntity findOneProfession(Long id){
        return professionRepository.findById(id).orElse(null);
    }



}
