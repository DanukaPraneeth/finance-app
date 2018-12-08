package com.backend.core.bills.travelclaims;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TravelClaimsController {

    @Autowired
    private TravelClaimsService travelClaimsService;

    @RequestMapping("/bills/travelclaims")
    public List<TravelClaims> getAllTravelClaimss(){
        return travelClaimsService.getAllTravelClaims();
    }

    @RequestMapping("/bills/travelclaims/id/{billId}")
    public TravelClaims getTravelClaims(@PathVariable String billId){
        return travelClaimsService.getTravelClaims(billId);
    }

    @RequestMapping("/bills/travelclaims/name/{name}")
    public TravelClaims getTravelClaimsByname(@PathVariable String name){
        return travelClaimsService.getTravelClaimsByname(name);
    }

    @RequestMapping("/bills/travelclaims/client/{clientId}")
    public TravelClaims getTravelClaimsByclientId(@PathVariable String clientId){
        return travelClaimsService.getTravelClaimsByclientId(clientId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/travelclaims")
    public MessageResponse addTravelClaims(@RequestBody TravelClaims travelClaims){
        return travelClaimsService.addTravelClaims(travelClaims);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/travelclaims/id/{billId}")
    public MessageResponse updateTravelClaims(@PathVariable String billId, @RequestBody TravelClaims travelClaims){
        return travelClaimsService.updateTravelClaims(billId, travelClaims);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/travelclaims/id/{billId}")
    public MessageResponse removeTravelClaims(@PathVariable String billId){
        return travelClaimsService.remveTravelClaims(billId);
    }

}
