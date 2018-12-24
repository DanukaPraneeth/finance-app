package com.backend.core.bills.telephone;

import com.backend.core.MessageResponse;
import com.backend.core.bills.models.billStatusModel;
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

    public List<TelephoneBills> getTelephoneBillsByPeriod (String period){
        return telephoneBillsRepo.findByPeriod(period);
    }

    public List<TelephoneBills> getTelephoneBillByMonth(String month){ return telephoneBillsRepo.findByNameEndsWith(month);}

    public List<TelephoneBills> getTelephoneBillByYear(String year){return telephoneBillsRepo.findByNameStartsWith(year);}

    public TelephoneBills getTelephoneBills (String billId){
        return telephoneBillsRepo.findBybillId(billId);
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

    public MessageResponse updateTelephoneBills (String billId , TelephoneBills billUpdate){
        try {
            TelephoneBills existingBill = telephoneBillsRepo.findBybillId(billId);
            existingBill.setBillId(billUpdate.getBillId() );
            existingBill.setPeriod(billUpdate.getPeriod());
            existingBill.setCategory(billUpdate.getCategory());
            existingBill.setLocation(billUpdate.getLocation());
            existingBill.setAmount(billUpdate.getAmount());
            existingBill.setCertification(billUpdate.getCertification());
            existingBill.setCertifiedDate(billUpdate.getCertifiedDate());
//            existingBill.setDatetime(billUpdate.getDatetime());
            existingBill.setTraineeStaffId(billUpdate.getTraineeStaffId());
            existingBill.setUserKey(billUpdate.getUserKey());
            telephoneBillsRepo.save(existingBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeTelephoneBills (String billId){
        try {
            TelephoneBills id = telephoneBillsRepo.findBybillId(billId);
            telephoneBillsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<TelephoneBills> pendingBills = telephoneBillsRepo.findByCertification(status);

        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("telephone");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }
}
