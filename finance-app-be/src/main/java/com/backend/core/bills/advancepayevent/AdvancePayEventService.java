package com.backend.core.bills.advancepayevent;

import com.backend.core.MessageResponse;
import com.backend.core.bills.FacadeBillService;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdvancePayEventService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private AdvancePayEventRepo advancePayEventRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<AdvancePayEvent> getAllAdvancePayEvent() {
        List<AdvancePayEvent> advancePayEvent = new ArrayList<AdvancePayEvent>();
        advancePayEventRepo.findAll()
                .forEach(advancePayEvent::add);

        return advancePayEvent;
    }

    public AdvancePayEvent getAdvancePayEventByRecName (String recName){

        return advancePayEventRepo.findByrecName(recName);
    }

    public AdvancePayEvent getAdvancePayEvent (String recid){

        return advancePayEventRepo.findByrecId(Integer.parseInt(recid));
    }

    public MessageResponse addAdvancePayEvent(AdvancePayEvent AdvancePayEvent){
        try {
            advancePayEventRepo.save(AdvancePayEvent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateAdvancePayEvent (String recId , AdvancePayEvent AdvancePayEvent){
        try {
            advancePayEventRepo.save(AdvancePayEvent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveAdvancePayEvent (int recId){
        try {
            AdvancePayEvent id = advancePayEventRepo.findByrecId(recId);
            advancePayEventRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
