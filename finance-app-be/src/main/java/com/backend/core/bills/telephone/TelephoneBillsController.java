package com.backend.core.bills.telephone;
import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TelephoneBillsController {

    @Autowired
    private TelephoneBillsService telephoneBillsService;

    @RequestMapping("/bills/telephonebills")
    public List<TelephoneBills> getAllTelephoneBillss(){
        return telephoneBillsService.getAllTelephoneBills();
    }

    @RequestMapping("/bills/telephonebills/id/{billId}")
    public TelephoneBills getTelephoneBills(@PathVariable String billId){
        return telephoneBillsService.getTelephoneBills(billId);
    }

    @RequestMapping("/bills/telephonebills/month/{month}")
    public TelephoneBills getTelephoneBillsBymonth(@PathVariable String month){
        return telephoneBillsService.getTelephoneBillsBymonth(month);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/telephonebills")
    public MessageResponse addTelephoneBills(@RequestBody TelephoneBills telephoneBills){
        return telephoneBillsService.addTelephoneBills(telephoneBills);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/telephonebills/id/{billId}")
    public MessageResponse updateTelephoneBills(@PathVariable String billId, @RequestBody TelephoneBills telephoneBills){
        return telephoneBillsService.updateTelephoneBills(billId, telephoneBills);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/telephonebills/id/{billId}")
    public MessageResponse removeTelephoneBills(@PathVariable String billId){
        return telephoneBillsService.remveTelephoneBills(billId);
    }

}
