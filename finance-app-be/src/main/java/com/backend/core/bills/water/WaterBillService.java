package com.backend.core.bills.water;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WaterBillService {

    @Autowired
    private WaterBillRepo waterBillRepo;

    public List<WaterBills> getAllWaterBills(){

        List<WaterBills> waterBill = new ArrayList<>();
        waterBillRepo.findAll()
                .forEach(waterBill::add);

        return waterBill;
    }

    public WaterBills getwaterBill (int billNo){

        return waterBillRepo.findOne(billNo);
    }

    public void addWaterBill(WaterBills waterBill){
        waterBillRepo.save(waterBill);
    }

    public void updateWaterBill (int billNo , WaterBills waterBill){
        waterBillRepo.save(waterBill);
    }

    public void remveWaterBill (int billNo){
        waterBillRepo.delete(billNo);
    }
}
