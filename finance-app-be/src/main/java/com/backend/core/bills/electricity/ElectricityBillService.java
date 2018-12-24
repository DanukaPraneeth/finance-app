package com.backend.core.bills.electricity;

import com.backend.core.MessageResponse;
import com.backend.core.bills.models.billStatusModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ElectricityBillService {

    private static Logger log = LoggerFactory.getLogger(ElectricityBillService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private ElectricityBillRepo electricityBillRepo;

    public List<ElectricityBill> getAllElectricityBills(){

        List<ElectricityBill> electricityBill = new ArrayList<>();
        electricityBillRepo.findAll()
                .forEach(electricityBill::add);

        return electricityBill;
    }

    public ElectricityBill getElectricityBill (String billNo){
        return electricityBillRepo.findBybillNo(billNo);
    }

    public List<ElectricityBill> getElectricityBillByPeriod (String month){
        return electricityBillRepo.findByPeriod(month);
    }

    public List<ElectricityBill> getElectricityBillByMonth(String month){ return electricityBillRepo.findByNameEndsWith(month);}

    public List<ElectricityBill> getElectricityBillByYear(String year){return electricityBillRepo.findByNameStartsWith(year);}

    public MessageResponse addElectricityBill(ElectricityBill electricityBill){
        try{
            electricityBillRepo.save(electricityBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateElectricityBill (String billNo , ElectricityBill electricityBill){
        try{
            ElectricityBill existingBill = electricityBillRepo.findBybillNo(billNo);
            existingBill.setBillNo(electricityBill.getBillNo());
            existingBill.setLocation(electricityBill.getLocation());
            existingBill.setPeriod(electricityBill.getPeriod());
            existingBill.setPreviousReading(electricityBill.getPreviousReading());
            existingBill.setCurrentReading(electricityBill.getCurrentReading());
            existingBill.setNoOfUnits(electricityBill.getNoOfUnits());
            existingBill.setAmount(electricityBill.getAmount());
            existingBill.setCertification(electricityBill.getCertification());
            existingBill.setCertifiedDate(electricityBill.getCertifiedDate());
            existingBill.setTraineeStaffId(electricityBill.getTraineeStaffId());
            existingBill.setUserKey(electricityBill.getUserKey());
            electricityBillRepo.save(existingBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record" + e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeElectricityBill (String billNo){
        try{
            ElectricityBill id = electricityBillRepo.findBybillNo(billNo);
            electricityBillRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record" + e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<ElectricityBill> pendingBills = electricityBillRepo.findByCertification(status);

        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("electricity");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }
}
