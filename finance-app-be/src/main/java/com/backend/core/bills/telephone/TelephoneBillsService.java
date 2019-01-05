package com.backend.core.bills.telephone;

import com.backend.core.MessageResponse;
import com.backend.core.common.models.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class TelephoneBillsService {

    private static Logger log = LoggerFactory.getLogger(TelephoneBillsService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private TelephoneBillsRepo telephoneBillsRepo;

    public List<TelephoneBills> getAllTelephoneBills() {
        List<TelephoneBills> telephoneBills = new ArrayList<TelephoneBills>();
        telephoneBillsRepo.findAll()
                .forEach(telephoneBills::add);

        return telephoneBills;
    }

    public List<TelephoneBills> getTelephoneBillsByPeriod (String period){
        return telephoneBillsRepo.findByPeriod(period);
    }

    public List<TelephoneBills> getTelephoneBillByMonth(String month){ return telephoneBillsRepo.findByPeriodEndsWith(month);}

    public List<TelephoneBills> getTelephoneBillByYear(String year){return telephoneBillsRepo.findByPeriodStartsWith(year);}

    public TelephoneBills getTelephoneBills (String billId){
        return telephoneBillsRepo.findBybillId(billId);
    }

    public MessageResponse addTelephoneBills(TelephoneBills TelephoneBills){
        try {
            telephoneBillsRepo.save(TelephoneBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateTelephoneBills (String billId , TelephoneBills billUpdate){
        try {
            TelephoneBills existingBill = telephoneBillsRepo.findBybillId(billId);
            existingBill.setBillId(billUpdate.getBillId() );
            existingBill.setPeriod(billUpdate.getPeriod());
            existingBill.setCategory(billUpdate.getCategory());
            existingBill.setLocation(billUpdate.getLocation());
            existingBill.setAmount(billUpdate.getAmount());
            //existingBill.setCertification(billUpdate.getCertification());
            //existingBill.setCertifiedDate(billUpdate.getCertifiedDate());
//            existingBill.setDatetime(billUpdate.getDatetime());
            existingBill.setTraineeStaffId(billUpdate.getTraineeStaffId());
            existingBill.setUserKey(billUpdate.getUserKey());
            telephoneBillsRepo.save(existingBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeTelephoneBills (String billId){
        try {
            TelephoneBills id = telephoneBillsRepo.findBybillId(billId);
            telephoneBillsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<TelephoneBills> pendingBills = telephoneBillsRepo.findByCertification(status);

        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("telephone");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }

    public List<yearExpenseModel> getExpensesByYear(String year){

        List<yearExpenseModel> sum = new ArrayList<yearExpenseModel>();

        try{
            List<TelephoneBills> totalList = getTelephoneBillByYear(year);
            for(int i = 1; i < 13 ; i++){

                String month = year + "-" + String.format("%02d",i);
                float monthSum = 0;

                for (TelephoneBills rs: totalList ) {
                    if(rs.getPeriod().equals(month) ) {
                        monthSum += rs.getAmount();
                    }
                }
                sum.add(new yearExpenseModel(String.format("%02d",i),monthSum));
            }
        }catch (Exception e){
            log.error("Error while getting the total expense for the year" + e);
        }
        return sum;
    }

    public List<monthExpenseModel> getExpensesByMonth(String month){

        List<monthExpenseModel> sum = new ArrayList<monthExpenseModel>();

        try{
            List<TelephoneBills> totalList = getTelephoneBillByMonth(month);
            List<String> years = telephoneBillsRepo.findDistinctFirstByPeriodEndingWith(month);


            for(String yr : years){

                float monthSum = 0;

                for (TelephoneBills rs: totalList ) {
                    if(rs.getPeriod().equals(yr) ) {
                        monthSum += rs.getAmount();
                    }
                }

                String yearNow = yr.split("-")[0];
                sum.add(new monthExpenseModel(yearNow,monthSum));
            }
        }catch (Exception e){
            log.error("Error while getting the total expense for the month" + e);
        }
        return sum;
    }

    public List<locationExpenseModel> getExpensesByLocationByYear(String year){
        List<locationExpenseModel> sum = new ArrayList<locationExpenseModel>();

        try{
            List<String> locations = telephoneBillsRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<TelephoneBills> telephoneBills = telephoneBillsRepo.findByLocationAndPeriodStartingWith(rs,year);

                for (TelephoneBills wb: telephoneBills ) {
                    locationSum += wb.getAmount();
                }

                sum.add(new locationExpenseModel(rs,locationSum));

            }

        }catch (Exception e){
            log.error("Error while getting the total expense for the location for each year" + e);
        }

        return sum;

    }

    public List<locationExpenseModel> getExpensesByLocationByMonth(String month){
        List<locationExpenseModel> sum = new ArrayList<locationExpenseModel>();

        try{
            List<String> locations = telephoneBillsRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<TelephoneBills> telephoneBills = telephoneBillsRepo.findByLocationAndPeriodEndingWith(rs,month);

                for (TelephoneBills wb: telephoneBills ) {
                    locationSum += wb.getAmount();
                }

                sum.add(new locationExpenseModel(rs,locationSum));

            }

        }catch (Exception e){
            log.error("Error while getting the total expense for the location for each month" + e);
        }

        return sum;

    }

    public MessageResponse approveBill(billApproveModel bill) {

        TelephoneBills selectedBill = telephoneBillsRepo.findBybillId(bill.getBillId());
        try{
            selectedBill.setCertification(bill.getStatus());
            LocalDateTime currentDateTime = LocalDateTime.now();
            String timeNow = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            selectedBill.setCertifiedDate(timeNow);
            telephoneBillsRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill approval ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

}
