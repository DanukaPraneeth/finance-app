package com.backend.core.common;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllers {

    @RequestMapping("/bills/expense/summary/year/{year}")
    public void getExpensesByYear(@PathVariable String year){

    }

}
