package com.backend.core.bills.advancepayevent;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdvancePayEventController {

    @Autowired
    private AdvancePayEventService advancePayEventService;

    @RequestMapping("/bills/advancepayevent")
    public List<AdvancePayEvent> getAllAdvancePayEvents(){
        return advancePayEventService.getAllAdvancePayEvent();
    }

    @RequestMapping("/bills/advancepayevent/id/{recId}")
    public AdvancePayEvent getAdvancePayEvent(@PathVariable String recId){
        return advancePayEventService.getAdvancePayEvent(recId);
    }

    @RequestMapping("/bills/advancepayevent/recname/{recName}")
    public AdvancePayEvent getAdvancePayEventByName(@PathVariable String recName){
        return advancePayEventService.getAdvancePayEventByRecName(recName);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/advancepayevent")
    public MessageResponse addAdvancePayEvent(@RequestBody AdvancePayEvent advancePayEvent){
        return advancePayEventService.addAdvancePayEvent(advancePayEvent);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/advancepayevent/{billNo}")
    public MessageResponse updateAdvancePayEvent(@PathVariable String billNo, @RequestBody AdvancePayEvent advancePayEvent){
        return advancePayEventService.updateAdvancePayEvent(billNo, advancePayEvent);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/advancepayevent/{billNo}")
    public MessageResponse removeAdvancePayEvent(@PathVariable String billNo){
        return advancePayEventService.remveAdvancePayEvent(Integer.parseInt(billNo));
    }

}
