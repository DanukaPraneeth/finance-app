package com.backend.core.bills.telephone;

import com.backend.core.MessageResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TelephoneBillsService {

    private static Logger log = LoggerFactory.getLogger(TelephoneBillsService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private TelephoneBillsRepo telephoneBillsRepo;

    public List<TelephoneBills> getAllTelephoneBills() {
        List<TelephoneBills> telephoneBills = new ArrayList<TelephoneBills>();
        telephoneBillsRepo.findAll()
                .forEach(telephoneBills::add);

        return telephoneBills;
    }

    public TelephoneBills getTelephoneBillsBymonth (String month){
        return telephoneBillsRepo.findBymonth(month);
    }

    public TelephoneBills getTelephoneBills (String billId){

        return telephoneBillsRepo.findBybillId(Integer.parseInt(billId));
    }

    public MessageResponse addTelephoneBills(TelephoneBills TelephoneBills){
        try {
            telephoneBillsRepo.save(TelephoneBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateTelephoneBills (String billId , TelephoneBills TelephoneBills){
        try {
            telephoneBillsRepo.save(TelephoneBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveTelephoneBills (String billId){
        try {
            TelephoneBills id = telephoneBillsRepo.findBybillId(Integer.parseInt(billId));
            telephoneBillsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
