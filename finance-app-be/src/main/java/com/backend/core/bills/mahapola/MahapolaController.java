package com.backend.core.bills.mahapola;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MahapolaController {

    @Autowired
    private MahapolaService mahapolaService;

    @RequestMapping("/bills/mahapola")
    public List<Mahapola> getAllMahapolas(){
        return mahapolaService.getAllMahapola();
    }

    @RequestMapping("/bills/mahapola/id/{paymentId}")
    public Mahapola getMahapola(@PathVariable String paymentId){
        return mahapolaService.getMahapola(paymentId);
    }

    @RequestMapping("/bills/mahapola/month/{month}")
    public Mahapola getMahapolaBymonth(@PathVariable String month){
        return mahapolaService.getMahapolaBymonth(month);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/mahapola")
    public MessageResponse addMahapola(@RequestBody Mahapola mahapola){
        return mahapolaService.addMahapola(mahapola);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/mahapola/id/{paymentId}")
    public MessageResponse updateMahapola(@PathVariable String paymentId, @RequestBody Mahapola mahapola){
        return mahapolaService.updateMahapola(paymentId, mahapola);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/mahapola/id/{paymentId}")
    public MessageResponse removeMahapola(@PathVariable String paymentId){
        return mahapolaService.remveMahapola(paymentId);
    }

}
