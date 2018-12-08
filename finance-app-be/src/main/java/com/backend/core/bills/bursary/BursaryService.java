package com.backend.core.bills.bursary;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BursaryService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private BursaryRepo bursaryRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<Bursary> getAllBursary() {
        List<Bursary> bursary = new ArrayList<Bursary>();
        bursaryRepo.findAll()
                .forEach(bursary::add);

        return bursary;
    }

    public Bursary getBursaryBymonth (String month){

        return bursaryRepo.findBymonth(month);
    }
    
    public Bursary getBursayBypaymentId (String paymentId){
        return bursaryRepo.findBypaymentId(Integer.parseInt(paymentId));
    } 

    public MessageResponse addBursary(Bursary Bursary){
        try {
            bursaryRepo.save(Bursary);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateBursary (String paymentId , Bursary Bursary){
        try {
            bursaryRepo.save(Bursary);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveBursary (long paymentId){
        try {
            Bursary id = bursaryRepo.findBypaymentId(paymentId);
            bursaryRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
