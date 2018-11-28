package com.backend.core.bills.water;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WaterBillController {

    @Autowired
    private WaterBillService waterBillService;

    @RequestMapping("/bills/waterbill")
    public List<WaterBills> getAllWaterBills(){
        return waterBillService.getAllWaterBills();
    }

    @RequestMapping("/bills/waterbill/{billNo}")
    public WaterBills getWaterBill(@PathVariable int billNo){
        return waterBillService.getwaterBill(billNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/waterbill")
    public void addWaterBill(@RequestBody WaterBills waterBill){
        waterBillService.addWaterBill(waterBill);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/waterbill/{billNo}")
    public void updateWaterBill(@PathVariable int billNo, @RequestBody WaterBills waterBill){
        waterBillService.updateWaterBill(billNo, waterBill);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/waterbill/{billNo}")
    public void removeWaterBill(@PathVariable int billNo){
        waterBillService.remveWaterBill(billNo);
    }
}
