package com.backend.core.bills.electricity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ElectricityBillService {

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

    public void addElectricityBill(ElectricityBill electricityBill){
        electricityBillRepo.save(electricityBill);
    }

    public void updateElectricityBill (String billNo , ElectricityBill electricityBill){
        electricityBillRepo.save(electricityBill);
    }

    public void remveElectricityBill (String billNo){
        ElectricityBill id = electricityBillRepo.findBybillNo(billNo);
        electricityBillRepo.delete(id);
    }
}
