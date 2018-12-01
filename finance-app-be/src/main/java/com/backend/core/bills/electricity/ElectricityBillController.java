package com.backend.core.bills.electricity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ElectricityBillController {

    @Autowired
    private ElectricityBillService electricityBillService;

    @RequestMapping("/bills/electricitybill")
    public List<ElectricityBill> getAllElectricityBills(){
        return electricityBillService.getAllElectricityBills();
    }

    @RequestMapping("/bills/electricitybill/{billNo}")
    public ElectricityBill getWaterBill(@PathVariable String billNo){
        return electricityBillService.getElectricityBill(billNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/electricitybill")
    public void addElectricityBill(@RequestBody ElectricityBill electricityBill){
        electricityBillService.addElectricityBill(electricityBill);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/electricitybill/{billNo}")
    public void updateElectricityBill(@PathVariable String billNo, @RequestBody ElectricityBill electricityBill){
        electricityBillService.updateElectricityBill(billNo, electricityBill);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/electricitybill/{billNo}")
    public void removeElectricityBill(@PathVariable String billNo){
        electricityBillService.remveElectricityBill(billNo);
    }
}
