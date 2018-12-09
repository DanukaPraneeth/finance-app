package com.backend.core.bills.salarypayment;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalaryPaymentController {

    @Autowired
    private SalaryPaymentService salaryPaymentService;

    @RequestMapping("/bills/salarypayment")
    public List<SalaryPayment> getAllSalaryPayments(){
        return salaryPaymentService.getAllSalaryPayment();
    }

    @RequestMapping("/bills/salarypayment/id/{paymentId}")
    public SalaryPayment getSalaryPayment(@PathVariable String paymentId){
        return salaryPaymentService.getSalaryPayment(paymentId);
    }

    @RequestMapping("/bills/salarypayment/type/{paymentType}")
    public SalaryPayment getSalaryPaymentBypaymentType(@PathVariable String paymentType){
        return salaryPaymentService.getSalaryPaymentBypaymentType(paymentType);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/salarypayment")
    public MessageResponse addSalaryPayment(@RequestBody SalaryPayment salaryPayment){
        return salaryPaymentService.addSalaryPayment(salaryPayment);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/salarypayment/id/{paymentId}")
    public MessageResponse updateSalaryPayment(@PathVariable String paymentId, @RequestBody SalaryPayment salaryPayment){
        return salaryPaymentService.updateSalaryPayment(paymentId, salaryPayment);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/salarypayment/id/{paymentId}")
    public MessageResponse removeSalaryPayment(@PathVariable String paymentId){
        return salaryPaymentService.remveSalaryPayment(paymentId);
    }

}
