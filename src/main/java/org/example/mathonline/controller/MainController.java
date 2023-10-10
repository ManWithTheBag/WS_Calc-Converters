package org.example.mathonline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class MainController {

    @GetMapping("/")
    public RedirectView mainPage() {
        return new RedirectView("/calculatorsList");
    }

    @GetMapping("/termsAndConditions")
    public String termsConditions(){
        return "termsAndConditions";
    }
    @GetMapping("/calculatorsList")
    public String calculatorsList() {
        return "calculatorsList";
    }

    @GetMapping("/trigonometry")
    public String trigonometry() {
        return "calc/trigonometry";
    }


    @GetMapping("/one")
    public String one(){
        return "/one";
    }

}
