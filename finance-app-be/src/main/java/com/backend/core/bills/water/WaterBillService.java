package com.backend.core.bills.water;

import com.backend.core.MessageResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WaterBillService {

    private static Logger log = LoggerFactory.getLogger(WaterBillService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private WaterBillRepo waterBillRepo;

    public List<WaterBills> getAllWaterBills(){

        List<WaterBills> waterBill = new ArrayList<>();
        waterBillRepo.findAll()
                .forEach(waterBill::add);

        return waterBill;
    }

    public WaterBills getwaterBill (String billNo){
        return waterBillRepo.findBybillNo(billNo);
    }

    public List<WaterBills> getwaterBillByYear (String month){
        return waterBillRepo.findByNameStartsWith(month);
    }

    public List<WaterBills> getwaterBillByMonth (String month){ return waterBillRepo.findByNameEndsWith(month); }

    public MessageResponse addWaterBill(WaterBills waterBill){
        try{
            waterBillRepo.save(waterBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateWaterBill (String billNo , WaterBills waterBill){
        try{
            WaterBills selectedBill = waterBillRepo.findBybillNo(billNo);
            selectedBill.setBillNo(waterBill.getBillNo());
            selectedBill.setPeriod(waterBill.getPeriod());
            selectedBill.setPreviousReading(waterBill.getPreviousReading());
            selectedBill.setCurrentReading(waterBill.getCurrentReading());
            selectedBill.setNoOfUnits(waterBill.getNoOfUnits());
            selectedBill.setAmount(waterBill.getAmount());
            selectedBill.setCertification(waterBill.getCertification());
            selectedBill.setCertifiedDate(waterBill.getCertifiedDate());
            selectedBill.setTraineeStaffId(waterBill.getTraineeStaffId());
            selectedBill.setUserKey(waterBill.getUserKey());
            waterBillRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeWaterBill (String billNo){
        WaterBills selectedBill = waterBillRepo.findBybillNo(billNo);
        try{
            waterBillRepo.delete(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
