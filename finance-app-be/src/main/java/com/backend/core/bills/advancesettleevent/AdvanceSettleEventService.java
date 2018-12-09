package com.backend.core.bills.advancesettleevent;

import com.backend.core.MessageResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdvanceSettleEventService {

    private static Logger log = LoggerFactory.getLogger(AdvanceSettleEventService.class);
    @Autowired
    private AdvanceSettleEventRepo advanceSettleEventRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<AdvanceSettleEvent> getAllAdvanceSettleEvent() {
        List<AdvanceSettleEvent> advanceSettleEvent = new ArrayList<AdvanceSettleEvent>();
        advanceSettleEventRepo.findAll()
                .forEach(advanceSettleEvent::add);

        return advanceSettleEvent;
    }


    public AdvanceSettleEvent getAdvanceSettleEvent (String settlementNo){

        return advanceSettleEventRepo.findBysettlementNo(Integer.parseInt(settlementNo));
    }

    public MessageResponse addAdvanceSettleEvent(AdvanceSettleEvent AdvanceSettleEvent){
        try {
            advanceSettleEventRepo.save(AdvanceSettleEvent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateAdvanceSettleEvent (String settlementNo , AdvanceSettleEvent AdvanceSettleEvent){
        try {
            advanceSettleEventRepo.save(AdvanceSettleEvent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveAdvanceSettleEvent (String settlementNo){
        try {
            AdvanceSettleEvent id = advanceSettleEventRepo.findBysettlementNo(Integer.parseInt(settlementNo));
            advanceSettleEventRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
