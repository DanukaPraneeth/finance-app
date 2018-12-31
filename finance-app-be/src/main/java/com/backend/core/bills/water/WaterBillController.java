package com.backend.core.bills.water;

import com.backend.core.MessageResponse;
import com.backend.core.common.models.billStatusModel;
import com.backend.core.common.models.locationExpenseModel;
import com.backend.core.common.models.monthExpenseModel;
import com.backend.core.common.models.yearExpenseModel;
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
    public WaterBills getWaterBill(@PathVariable String billNo){
        return waterBillService.getwaterBill(billNo);
    }

    @RequestMapping("/bills/waterbill/filtermonth/{month}")
    public List<WaterBills> getWaterbillBymonth(@PathVariable String month){
        return waterBillService.getwaterBillByMonth(month);
    }

    @RequestMapping("/bills/waterbill/filteryear/{year}")
    public List<WaterBills> getWaterbillByYear(@PathVariable String year){
        return waterBillService.getwaterBillByYear(year);
    }

    @RequestMapping("/bills/waterbill/filterperiod/{period}")
    public List<WaterBills> getWaterbillByPeriod(@PathVariable String period){
        return waterBillService.getwaterBillByPeriod(period);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/waterbill")
    public MessageResponse addWaterBill(@RequestBody WaterBills waterBill){
        return waterBillService.addWaterBill(waterBill);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/waterbill/{billNo}")
    public MessageResponse updateWaterBill(@PathVariable String billNo, @RequestBody WaterBills waterBill){
        return waterBillService.updateWaterBill(billNo, waterBill);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/waterbill/{billNo}")
    public MessageResponse removeWaterBill(@PathVariable String billNo){
        return waterBillService.removeWaterBill(billNo);
    }

    @RequestMapping("/bills/waterbill/status/{status}")
    public billStatusModel getStatusCount(@PathVariable String status){
        return waterBillService.getStatusCount(status);
    }

    @RequestMapping("/bills/waterbill/summary/year/{year}")
    public List<yearExpenseModel> getExpensesByYear(@PathVariable String year){
        return waterBillService.getExpensesByYear(year);
    }

    @RequestMapping("/bills/waterbill/summary/month/{month}")
    public List<monthExpenseModel> getExpensesByMonth(@PathVariable String month){
        return waterBillService.getExpensesByMonth(month);
    }

    @RequestMapping("/bills/waterbill/summary/location/year/{year}")
    public List<locationExpenseModel> getExpensesByLocationByYear(@PathVariable String year){
        return waterBillService.getExpensesByLocationByYear(year);
    }

    @RequestMapping("/bills/waterbill/summary/location/month/{month}")
    public List<locationExpenseModel> getExpensesByLocationByMonth(@PathVariable String month){
        return waterBillService.getExpensesByLocationByMonth(month);
    }
}
