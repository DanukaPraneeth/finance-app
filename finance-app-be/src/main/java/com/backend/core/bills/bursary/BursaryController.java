package com.backend.core.bills.bursary;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BursaryController {

    @Autowired
    private BursaryService bursaryService;

    @RequestMapping("/bills/bursary")
    public List<Bursary> getAllBursarys(){
        return bursaryService.getAllBursary();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/bills/bursary/id/{paymentId}")
    public Bursary getBursaryByPaymentId(@PathVariable String paymentId){
        return bursaryService.getBursayBypaymentId(paymentId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/bills/bursary/month/{month}")
    public Bursary getBursaryByMonth(@PathVariable String month){
        return bursaryService.getBursaryBymonth(month);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/bursary")
    public MessageResponse addBursary(@RequestBody Bursary bursary){
        return bursaryService.addBursary(bursary);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/bursary/{paymentId}")
    public MessageResponse updateBursary(@PathVariable String paymentId, @RequestBody Bursary bursary){
        return bursaryService.updateBursary(paymentId, bursary);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/bursary/{paymentId}")
    public MessageResponse removeBursary(@PathVariable String paymentId){
        return bursaryService.remveBursary(Long.parseLong(paymentId));
    }

}
