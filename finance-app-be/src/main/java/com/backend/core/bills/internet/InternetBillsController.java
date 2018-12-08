package com.backend.core.bills.internet;

import com.backend.core.MessageResponse;
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

    @RequestMapping("/bills/internetbills/month/{month}")
    public InternetBills getInternetBillsBymonth(@PathVariable String month){
        return internetBillsService.getInternetBillsBymonth(month);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/internetbills")
    public MessageResponse addInternetBills(@RequestBody InternetBills internetBills){
        return internetBillsService.addInternetBills(internetBills);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/internetbills/id/{billId}")
    public MessageResponse updateInternetBills(@PathVariable String billId, @RequestBody InternetBills internetBills){
        return internetBillsService.updateInternetBills(billId, internetBills);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/internetbills/id/{billId}")
    public MessageResponse removeInternetBills(@PathVariable String billId){
        return internetBillsService.remveInternetBills(billId);
    }

}
