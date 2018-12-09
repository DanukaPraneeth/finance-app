package com.backend.core.bills.salarypayment;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SalaryPaymentService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private SalaryPaymentRepo salaryPaymentRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
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
