package com.backend.core.bills.travelclaims;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TravelClaimsService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private TravelClaimsRepo travelClaimsRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<TravelClaims> getAllTravelClaims() {
        List<TravelClaims> travelClaims = new ArrayList<TravelClaims>();
        travelClaimsRepo.findAll()
                .forEach(travelClaims::add);

        return travelClaims;
    }

    public TravelClaims getTravelClaimsByname (String name){

        return travelClaimsRepo.findByname(name);
    }

    public TravelClaims getTravelClaims (String billId){

        return travelClaimsRepo.findBybillId(Integer.parseInt(billId));
    }

    public TravelClaims getTravelClaimsByclientId (String clientId){

        return travelClaimsRepo.findByclaimerId(clientId);
    }

    public MessageResponse addTravelClaims(TravelClaims TravelClaims){
        try {
            travelClaimsRepo.save(TravelClaims);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateTravelClaims (String billId , TravelClaims TravelClaims){
        try {
            travelClaimsRepo.save(TravelClaims);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveTravelClaims (String billId){
        try {
            TravelClaims id = travelClaimsRepo.findBybillId(Integer.parseInt(billId));
            travelClaimsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
