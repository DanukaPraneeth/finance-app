package com.backend.core.bills.telephone;
import com.backend.core.MessageResponse;
import com.backend.core.bills.models.billStatusModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TelephoneBillsController {

    @Autowired
    private TelephoneBillsService telephoneBillsService;

    @RequestMapping("/bills/telephonebills")
    public List<TelephoneBills> getAllTelephoneBills(){

        return telephoneBillsService.getAllTelephoneBills();
    }

    @RequestMapping("/bills/telephonebills/{billId}")
    public TelephoneBills getTelephoneBills(@PathVariable String billId){
        return telephoneBillsService.getTelephoneBills(billId);
    }

    @RequestMapping("/bills/telephonebills/filterperiod/{period}")
    public List<TelephoneBills> getTelephoneBillsByPeriod(@PathVariable String period){
        return telephoneBillsService.getTelephoneBillsByPeriod(period);
    }

    @RequestMapping("/bills/telephonebills/filtermonth/{month}")
    public List<TelephoneBills> getTelephoneBillsBymonth(@PathVariable String month){
        return telephoneBillsService.getTelephoneBillByMonth(month);
    }

    @RequestMapping("/bills/telephonebills/filteryear/{year}")
    public List<TelephoneBills> getTelephoneBillsByYear(@PathVariable String year){
        return telephoneBillsService.getTelephoneBillByYear(year);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/telephonebills")
    public MessageResponse addTelephoneBills(@RequestBody TelephoneBills telephoneBills){
        return telephoneBillsService.addTelephoneBills(telephoneBills);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/telephonebills/{billId}")
    public MessageResponse updateTelephoneBills(@PathVariable String billId, @RequestBody TelephoneBills telephoneBills){
        return telephoneBillsService.updateTelephoneBills(billId, telephoneBills);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/telephonebills/{billId}")
    public MessageResponse removeTelephoneBills(@PathVariable String billId){
        return telephoneBillsService.removeTelephoneBills(billId);
    }

    @RequestMapping("/bills/telephonebills/status/{status}")
    public billStatusModel getStatusCount(@PathVariable String status){
        return telephoneBillsService.getStatusCount(status);
    }
}
