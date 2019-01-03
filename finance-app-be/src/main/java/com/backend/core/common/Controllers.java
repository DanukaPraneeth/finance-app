package com.backend.core.common;

import com.backend.core.MessageResponse;
import com.backend.core.bills.electricity.ElectricityBillService;
import com.backend.core.bills.telephone.TelephoneBillsService;
import com.backend.core.bills.water.WaterBillService;
import com.backend.core.common.models.billApproveModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controllers {

    private static Logger log = LoggerFactory.getLogger(Controllers.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private WaterBillService waterBillService;
    @Autowired
    private TelephoneBillsService telephoneBillsService;
    @Autowired
    private ElectricityBillService electricityBillService;

    @RequestMapping("/bills/expense/summary/year/{year}")
    public void getExpensesByYear(@PathVariable String year){

    }

    @RequestMapping(method = RequestMethod.POST,  value = "/bills/approve/{billId}")
    public MessageResponse approveBill(@RequestBody billApproveModel payload){

        if(payload.getBillType().equals("waterbill")){
            return waterBillService.approveBill(payload);
        }
        else if(payload.getBillType().equals("electricitybill")){
            return electricityBillService.approveBill(payload);
        }
        else if(payload.getBillType().equals("telephonebill")){
            return telephoneBillsService.approveBill(payload);
        }
        messageResponse.setSuccess(false);
        return messageResponse;
    }

}
