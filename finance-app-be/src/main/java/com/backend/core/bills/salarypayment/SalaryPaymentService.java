package com.backend.core.bills.salarypayment;

import com.backend.core.MessageResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SalaryPaymentService {

    private static Logger log = LoggerFactory.getLogger(SalaryPaymentService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private SalaryPaymentRepo salaryPaymentRepo;

    public List<SalaryPayment> getAllSalaryPayment() {
        List<SalaryPayment> salaryPayment = new ArrayList<SalaryPayment>();
        salaryPaymentRepo.findAll()
                .forEach(salaryPayment::add);

        return salaryPayment;
    }

    public SalaryPayment getSalaryPayment (String paymentId){

        return salaryPaymentRepo.findBypaymentId(Integer.parseInt(paymentId));
    }

    public SalaryPayment getSalaryPaymentBypaymentType (String paymentType){

        return salaryPaymentRepo.findBypaymentType(paymentType);
    }

    public MessageResponse addSalaryPayment(SalaryPayment SalaryPayment){
        try {
            salaryPaymentRepo.save(SalaryPayment);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateSalaryPayment (String paymentId , SalaryPayment SalaryPayment){
        try {
            salaryPaymentRepo.save(SalaryPayment);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveSalaryPayment (String paymentId){
        try {
            SalaryPayment id = salaryPaymentRepo.findBypaymentId(Integer.parseInt(paymentId));
            salaryPaymentRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
