package com.backend.core.bills.advancesettleevent;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdvanceSettleEventController {

    @Autowired
    private AdvanceSettleEventService advanceSettleEventService;

    @RequestMapping("/bills/advancesettle")
    public List<AdvanceSettleEvent> getAllAdvanceSettleEvents(){
        return advanceSettleEventService.getAllAdvanceSettleEvent();
    }

    @RequestMapping("/bills/advancesettle/{settlementNo}")
    public AdvanceSettleEvent getAdvanceSettleEvent(@PathVariable String settlementNo){
        return advanceSettleEventService.getAdvanceSettleEvent(settlementNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/advancesettle")
    public MessageResponse addAdvanceSettleEvent(@RequestBody AdvanceSettleEvent advanceSettleEvent){
        return advanceSettleEventService.addAdvanceSettleEvent(advanceSettleEvent);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/advancesettle/{settlementNo}")
    public MessageResponse updateAdvanceSettleEvent(@PathVariable String settlementNo, @RequestBody AdvanceSettleEvent advanceSettleEvent){
        return advanceSettleEventService.updateAdvanceSettleEvent(settlementNo, advanceSettleEvent);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/advancesettle/{settlementNo}")
    public MessageResponse removeAdvanceSettleEvent(@PathVariable String settlementNo){
        return advanceSettleEventService.remveAdvanceSettleEvent(settlementNo);
    }

}
