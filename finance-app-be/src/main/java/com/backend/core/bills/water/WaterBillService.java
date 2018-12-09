package com.backend.core.bills.water;

import com.backend.core.MessageResponse;
import com.backend.core.bills.electricity.ElectricityBill;
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

    public WaterBills getwaterBillByMonth (String month){
        return waterBillRepo.findByPeriod(month);
    }

    public void addWaterBill(WaterBills waterBill){
        try{
            waterBillRepo.save(waterBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering the bill record ", e);
            messageResponse.setSuccess(false);
        }
    }

    public void updateWaterBill (int billNo , WaterBills waterBill){
        try{
            waterBillRepo.save(waterBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record ", e);
            messageResponse.setSuccess(false);
        }
    }

    public void remveWaterBill (String billNo){
        WaterBills id = waterBillRepo.findBybillNo(billNo);
        try{
            waterBillRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record ", e);
            messageResponse.setSuccess(false);
        }
    }
}
