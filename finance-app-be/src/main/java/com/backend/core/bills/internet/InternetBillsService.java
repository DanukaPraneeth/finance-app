package com.backend.core.bills.internet;

import com.backend.core.MessageResponse;
import com.backend.core.bills.water.WaterBills;
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
public class InternetBillsService {

    private static Logger log = LoggerFactory.getLogger(InternetBillsService.class);
    @Autowired
    private InternetBillsRepo internetBillsRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<InternetBills> getAllInternetBills() {
        List<InternetBills> internetBills = new ArrayList<InternetBills>();
        internetBillsRepo.findAll()
                .forEach(internetBills::add);

        return internetBills;
    }

    public InternetBills getInternetBills (String billNo){
        return internetBillsRepo.findByBillNo(billNo);
    }

    public List<InternetBills> getinternetBillByPeriod (String period){
        return internetBillsRepo.findByPeriod(period);
    }

    public List<InternetBills> getinternetBillByYear (String year){
        return internetBillsRepo.findByPeriodStartsWith(year);
    }

    public List<InternetBills> getinternetBillByMonth (String month){ return internetBillsRepo.findByPeriodEndsWith(month); }

    public MessageResponse addInternetBills(InternetBills InternetBills){
        try {
            internetBillsRepo.save(InternetBills);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateInternetBills (String billId , InternetBills internetBill){
        try {
            InternetBills selectedBill = internetBillsRepo.findByBillNo(billId);
            selectedBill.setBillNo(internetBill.getBillNo());
            selectedBill.setPeriod(internetBill.getPeriod());
            selectedBill.setLocation(internetBill.getLocation());
            selectedBill.setAmount(internetBill.getAmount());
            selectedBill.setTraineeStaffId(internetBill.getTraineeStaffId());
            selectedBill.setUserKey(internetBill.getUserKey());
            internetBillsRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeInternetBills (String billNo){
        try {
            InternetBills selectedBill = internetBillsRepo.findByBillNo(billNo);
            internetBillsRepo.delete(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<InternetBills> pendingBills = internetBillsRepo.findByCertification(status);
        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("internet");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }

    public List<yearExpenseModel> getExpensesByYear(String year){

        List<yearExpenseModel> sum = new ArrayList<yearExpenseModel>();

        try{
            List<InternetBills> totalList = getinternetBillByYear(year);
            for(int i = 1; i < 13 ; i++){

                String month = year + "-" + String.format("%02d",i);
                float monthSum = 0;

                for (InternetBills rs: totalList ) {
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
            List<InternetBills> totalList = getinternetBillByMonth(month);
            List<String> years = internetBillsRepo.findDistinctFirstByPeriodEndingWith(month);


            for(String yr : years){

                float monthSum = 0;

                for (InternetBills rs: totalList ) {
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
            List<String> locations = internetBillsRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<InternetBills> internetBills = internetBillsRepo.findByLocationAndPeriodStartingWith(rs,year);

                for (InternetBills wb: internetBills ) {
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
            List<String> locations = internetBillsRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<InternetBills> internetBills = internetBillsRepo.findByLocationAndPeriodEndingWith(rs,month);

                for (InternetBills wb: internetBills ) {
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

        InternetBills selectedBill = internetBillsRepo.findByBillNo(bill.getBillId());
        try{
            selectedBill.setCertification(bill.getStatus());
            LocalDateTime currentDateTime = LocalDateTime.now();
            String timeNow = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            selectedBill.setCertifiedDate(timeNow);
            internetBillsRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill approval ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
