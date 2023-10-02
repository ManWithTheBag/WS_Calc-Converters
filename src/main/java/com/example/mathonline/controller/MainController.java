package com.example.mathonline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String mainPage() {
        return "mathOnline";
    }

    @GetMapping("/calculatorsList")
    public String calculatorsList() {
        return "calculatorsList";
    }

    @GetMapping("/trigonometry")
    public String trigonometry() {
        return "/calc/sin_cos_tang";
    }

}
