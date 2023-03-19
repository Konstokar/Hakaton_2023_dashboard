package com.cbr.testTask.services;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @PreAuthorize("hasRole('ROLE_ADMIN')") //для ограничения пользователей, чтобы на страницу могли заходить только администраторы
    public void doAdminStuff(){
        System.out.println("Only admin here");
    }
}
