package com.backend.core.common;

import com.backend.core.MessageResponse;
import com.backend.core.bills.electricity.ElectricityBillService;
import com.backend.core.bills.internet.InternetBillsService;
import com.backend.core.bills.telephone.TelephoneBillsService;
import com.backend.core.bills.water.WaterBillService;
import com.backend.core.common.models.billApproveModel;
import com.backend.core.common.models.billStatusModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    @Autowired
    private InternetBillsService internetBillsService;

    @RequestMapping("/bills/expense/summary/year/{year}")
    public void getExpensesByYear(@PathVariable String year){

    }

    @RequestMapping("/bills/status/{status}")
    public List<billStatusModel> getAllBillStatus(@PathVariable String status){

        List<billStatusModel> respond = new ArrayList<>();

        String[] billTypes = {"water","electricity","telephone","internet"};

        try{
            for(int i = 0; i < billTypes.length; i++){

                String bill = billTypes[i];
                switch (bill){
                    case "water" :
                        respond.add(waterBillService.getStatusCount(status));
                        break;
                    case "electricity" :
                        respond.add(electricityBillService.getStatusCount(status));
                        break;
                    case "telephone" :
                        respond.add((telephoneBillsService.getStatusCount(status)));
                        break;
                    case "internet" :
                        respond.add(internetBillsService.getStatusCount(status));
                        break;
                }
            }
        }catch (Exception e){
            log.error("Error while getting the total pending count for all bills" + e);
        }

        return respond;

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
        else if(payload.getBillType().equals("internetbill")){
            return internetBillsService.approveBill(payload);
        }
        messageResponse.setSuccess(false);
        return messageResponse;
    }

}
