package com.example.atshacaton.util;

public class PersonNotRegisteredException extends RuntimeException{
    public PersonNotRegisteredException(String msg){
        super(msg);
    }
}
