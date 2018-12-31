package com.backend.core.bills.electricity;

import com.backend.core.MessageResponse;
import com.backend.core.common.models.billStatusModel;
import com.backend.core.common.models.locationExpenseModel;
import com.backend.core.common.models.monthExpenseModel;
import com.backend.core.common.models.yearExpenseModel;
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

    @RequestMapping("/bills/electricitybill/filterperiod/{period}")
    public List<ElectricityBill> getBillsByPeriod(@PathVariable String period){
        return electricityBillService.getElectricityBillByPeriod(period);
    }

    @RequestMapping("/bills/electricitybill/filtermonth/{month}")
    public List<ElectricityBill> getBillsByMonth(@PathVariable String month){
        return electricityBillService.getElectricityBillByMonth(month);
    }

    @RequestMapping("/bills/electricitybill/filteryear/{year}")
    public List<ElectricityBill> getBillsByYear(@PathVariable String year){
        return electricityBillService.getElectricityBillByYear(year);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/bills/electricitybill")
    public MessageResponse addElectricityBill(@RequestBody ElectricityBill electricityBill){
        return electricityBillService.addElectricityBill(electricityBill);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/electricitybill/{billNo}")
    public MessageResponse updateElectricityBill(@PathVariable String billNo, @RequestBody ElectricityBill electricityBill){
        return electricityBillService.updateElectricityBill(billNo, electricityBill);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/electricitybill/{billNo}")
    public MessageResponse removeElectricityBill(@PathVariable String billNo){
        return electricityBillService.removeElectricityBill(billNo);
    }

    @RequestMapping("/bills/electricitybill/status/{status}")
    public billStatusModel getStatusCount(@PathVariable String status){
        return electricityBillService.getStatusCount(status);
    }

    @RequestMapping("/bills/electricitybill/summary/year/{year}")
    public List<yearExpenseModel> getExpensesByYear(@PathVariable String year){
        return electricityBillService.getExpensesByYear(year);
    }

    @RequestMapping("/bills/electricitybill/summary/month/{month}")
    public List<monthExpenseModel> getExpensesByMonth(@PathVariable String month){
        return electricityBillService.getExpensesByMonth(month);
    }

    @RequestMapping("/bills/electricitybill/summary/location/year/{year}")
    public List<locationExpenseModel> getExpensesByLocationByYear(@PathVariable String year){
        return electricityBillService.getExpensesByLocationByYear(year);
    }

    @RequestMapping("/bills/electricitybill/summary/location/month/{month}")
    public List<locationExpenseModel> getExpensesByLocationByMonth(@PathVariable String month){
        return electricityBillService.getExpensesByLocationByMonth(month);
    }
}
