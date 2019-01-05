package com.backend.core.bills.internet;

import com.backend.core.MessageResponse;
import com.backend.core.common.models.billStatusModel;
import com.backend.core.common.models.locationExpenseModel;
import com.backend.core.common.models.monthExpenseModel;
import com.backend.core.common.models.yearExpenseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InternetBillsController {

    @Autowired
    private InternetBillsService internetBillsService;

    @RequestMapping("/bills/internetbills")
    public List<InternetBills> getAllInternetBillss(){
        return internetBillsService.getAllInternetBills();
    }

    @RequestMapping("/bills/internetbills/id/{billId}")
    public InternetBills getInternetBills(@PathVariable String billId){
        return internetBillsService.getInternetBills(billId);
    }

    @RequestMapping("/bills/internetbills/filtermonth/{month}")
    public List<InternetBills> getInternetbillBymonth(@PathVariable String month){
        return internetBillsService.getinternetBillByMonth(month);
    }

    @RequestMapping("/bills/internetbills/filteryear/{year}")
    public List<InternetBills> getInternetbillByYear(@PathVariable String year){
        return internetBillsService.getinternetBillByYear(year);
    }

    @RequestMapping("/bills/internetbills/filterperiod/{period}")
    public List<InternetBills> getInternetbillByPeriod(@PathVariable String period) {
        return internetBillsService.getinternetBillByPeriod(period);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/internetbills")
    public MessageResponse addInternetBill(@RequestBody InternetBills internetBills){
        return internetBillsService.addInternetBills(internetBills);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/internetbills/{billNo}")
    public MessageResponse updateInternetBill(@PathVariable String billNo, @RequestBody InternetBills internetBills){
        return internetBillsService.updateInternetBills(billNo, internetBills);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/internetbills/{billNo}")
    public MessageResponse removeInternetBill(@PathVariable String billNo){
        return internetBillsService.removeInternetBills(billNo);
    }

    @RequestMapping("/bills/internetbills/status/{status}")
    public billStatusModel getStatusCount(@PathVariable String status){
        return internetBillsService.getStatusCount(status);
    }

    @RequestMapping("/bills/internetbills/summary/year/{year}")
    public List<yearExpenseModel> getExpensesByYear(@PathVariable String year){
        return internetBillsService.getExpensesByYear(year);
    }

    @RequestMapping("/bills/internetbills/summary/month/{month}")
    public List<monthExpenseModel> getExpensesByMonth(@PathVariable String month){
        return internetBillsService.getExpensesByMonth(month);
    }

    @RequestMapping("/bills/internetbills/summary/location/year/{year}")
    public List<locationExpenseModel> getExpensesByLocationByYear(@PathVariable String year){
        return internetBillsService.getExpensesByLocationByYear(year);
    }

    @RequestMapping("/bills/internetbills/summary/location/month/{month}")
    public List<locationExpenseModel> getExpensesByLocationByMonth(@PathVariable String month){
        return internetBillsService.getExpensesByLocationByMonth(month);
    }
}
