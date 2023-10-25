package org.example.calcconverter;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CalcConverterApplication {

    public static void main(String[] args) {
        SpringApplication.run(CalcConverterApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(){
        return runner ->{
            System.out.println("Ok");
        };
    }

}
