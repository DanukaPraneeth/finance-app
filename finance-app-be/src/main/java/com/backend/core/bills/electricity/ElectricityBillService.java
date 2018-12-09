package com.backend.core.bills.electricity;

import com.backend.core.MessageResponse;
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

    public ElectricityBill getElectricityBillByMonth (String month){
        return electricityBillRepo.findBymonth(month);
    }

    public ElectricityBill getElectricityBill (String billNo){

        return electricityBillRepo.findBybillNo(billNo);
    }

    public void addElectricityBill(ElectricityBill electricityBill){
        try{
            electricityBillRepo.save(electricityBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
    }

    public void updateElectricityBill (String billNo , ElectricityBill electricityBill){
        try{
            electricityBillRepo.save(electricityBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record" + e);
            messageResponse.setSuccess(false);
        }
    }

    public void remveElectricityBill (String billNo){
        try{
            ElectricityBill id = electricityBillRepo.findBybillNo(billNo);
            electricityBillRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record" + e);
            messageResponse.setSuccess(false);
        }
    }
}
