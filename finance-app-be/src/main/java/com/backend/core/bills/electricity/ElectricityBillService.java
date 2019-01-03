package com.backend.core.bills.electricity;

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
public class ElectricityBillService {

    private static Logger log = LoggerFactory.getLogger(ElectricityBillService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private ElectricityBillRepo electricityBillRepo;

    public List<ElectricityBill> getAllElectricityBills(){

        List<ElectricityBill> electricityBill = new ArrayList<>();
        electricityBillRepo.findAll()
                .forEach(electricityBill::add);

        return electricityBill;
    }

    public ElectricityBill getElectricityBill (String billNo){
        return electricityBillRepo.findBybillNo(billNo);
    }

    public List<ElectricityBill> getElectricityBillByPeriod (String month){
        return electricityBillRepo.findByPeriod(month);
    }

    public List<ElectricityBill> getElectricityBillByMonth(String month){ return electricityBillRepo.findByPeriodEndsWith(month);}

    public List<ElectricityBill> getElectricityBillByYear(String year){return electricityBillRepo.findByPeriodStartsWith(year);}

    public MessageResponse addElectricityBill(ElectricityBill electricityBill){
        try{
            electricityBillRepo.save(electricityBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateElectricityBill (String billNo , ElectricityBill electricityBill){
        try{
            ElectricityBill existingBill = electricityBillRepo.findBybillNo(billNo);
            existingBill.setBillNo(electricityBill.getBillNo());
            existingBill.setLocation(electricityBill.getLocation());
            existingBill.setPeriod(electricityBill.getPeriod());
            existingBill.setPreviousReading(electricityBill.getPreviousReading());
            existingBill.setCurrentReading(electricityBill.getCurrentReading());
            existingBill.setNoOfUnits(electricityBill.getNoOfUnits());
            existingBill.setAmount(electricityBill.getAmount());
            //existingBill.setCertification(electricityBill.getCertification());
            //existingBill.setCertifiedDate(electricityBill.getCertifiedDate());
            existingBill.setTraineeStaffId(electricityBill.getTraineeStaffId());
            existingBill.setUserKey(electricityBill.getUserKey());
            electricityBillRepo.save(existingBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record" + e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeElectricityBill (String billNo){
        try{
            ElectricityBill id = electricityBillRepo.findBybillNo(billNo);
            electricityBillRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record" + e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<ElectricityBill> pendingBills = electricityBillRepo.findByCertification(status);

        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("electricity");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }

    public List<yearExpenseModel> getExpensesByYear(String year){

        List<yearExpenseModel> sum = new ArrayList<yearExpenseModel>();

        try{
            List<ElectricityBill> totalList = getElectricityBillByYear(year);
            for(int i = 1; i < 13 ; i++){

                String month = year + "-" + i;
                float monthSum = 0;

                for (ElectricityBill rs: totalList ) {
                    if(rs.getPeriod().equals(month) ) {
                        monthSum += rs.getAmount();
                    }
                }
                sum.add(new yearExpenseModel(String.valueOf(i),monthSum));
            }
        }catch (Exception e){
            log.error("Error while getting the total expense for the year" + e);
        }
        return sum;
    }


    public List<monthExpenseModel> getExpensesByMonth(String month){

        List<monthExpenseModel> sum = new ArrayList<monthExpenseModel>();

        try{
            List<ElectricityBill> totalList = getElectricityBillByMonth(month);
            List<String> years = electricityBillRepo.findDistinctFirstByPeriodEndingWith(month);


            for(String yr : years){

                float monthSum = 0;

                for (ElectricityBill rs: totalList ) {
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
            List<String> locations = electricityBillRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<ElectricityBill> electricityBills = electricityBillRepo.findByLocationAndPeriodStartingWith(rs,year);

                for (ElectricityBill wb: electricityBills ) {
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
            List<String> locations = electricityBillRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<ElectricityBill> electricityBills = electricityBillRepo.findByLocationAndPeriodEndingWith(rs,month);

                for (ElectricityBill wb: electricityBills ) {
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

        ElectricityBill selectedBill = electricityBillRepo.findBybillNo(bill.getBillId());
        try{
            selectedBill.setCertification(bill.getStatus());
            LocalDateTime currentDateTime = LocalDateTime.now();
            String timeNow = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            selectedBill.setCertifiedDate(timeNow);
            electricityBillRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill approval ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
