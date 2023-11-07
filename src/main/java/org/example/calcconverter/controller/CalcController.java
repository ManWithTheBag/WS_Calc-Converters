package org.example.calcconverter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalcController {

    @GetMapping("/trigonometry")
    public String trigonometry() {
        return "calc/trigonometry";
    }

    @GetMapping("/reduction-fraction")
    public String reductionFraction(){
        return "calc/reductionFractions";
    }
}
