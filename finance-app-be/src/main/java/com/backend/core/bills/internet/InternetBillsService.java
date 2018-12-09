package com.backend.core.bills.internet;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InternetBillsService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private InternetBillsRepo internetBillsRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<InternetBills> getAllInternetBills() {
        List<InternetBills> internetBills = new ArrayList<InternetBills>();
        internetBillsRepo.findAll()
                .forEach(internetBills::add);

        return internetBills;
    }

    public InternetBills getInternetBillsBymonth (String month){

        return internetBillsRepo.findBymonth(month);
    }

    public InternetBills getInternetBills (String billId){

        return internetBillsRepo.findBybillId(Integer.parseInt(billId));
    }

    public MessageResponse addInternetBills(InternetBills InternetBills){
        try {
            internetBillsRepo.save(InternetBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateInternetBills (String billId , InternetBills InternetBills){
        try {
            internetBillsRepo.save(InternetBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveInternetBills (String billId){
        try {
            InternetBills id = internetBillsRepo.findBybillId(Integer.parseInt(billId));
            internetBillsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
