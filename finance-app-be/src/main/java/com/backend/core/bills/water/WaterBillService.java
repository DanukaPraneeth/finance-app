package com.backend.core.bills.water;

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
public class WaterBillService {

    private static Logger log = LoggerFactory.getLogger(WaterBillService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private WaterBillRepo waterBillRepo;

    public List<WaterBills> getAllWaterBills(){

        List<WaterBills> waterBill = new ArrayList<>();
        waterBillRepo.findAll()
                .forEach(waterBill::add);

        return waterBill;
    }

    public WaterBills getwaterBill (String billNo){
        return waterBillRepo.findBybillNo(billNo);
    }

    public List<WaterBills> getwaterBillByPeriod (String period){
        return waterBillRepo.findByPeriod(period);
    }

    public List<WaterBills> getwaterBillByYear (String year){
        return waterBillRepo.findByPeriodStartsWith(year);
    }

    public List<WaterBills> getwaterBillByMonth (String month){ return waterBillRepo.findByPeriodEndsWith(month); }

    public MessageResponse addWaterBill(WaterBills waterBill){
        try{
            waterBillRepo.save(waterBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateWaterBill (String billNo , WaterBills waterBill){
        try{
            WaterBills selectedBill = waterBillRepo.findBybillNo(billNo);
            selectedBill.setBillNo(waterBill.getBillNo());
            selectedBill.setPeriod(waterBill.getPeriod());
            selectedBill.setLocation(waterBill.getLocation());
            selectedBill.setPreviousReading(waterBill.getPreviousReading());
            selectedBill.setCurrentReading(waterBill.getCurrentReading());
            selectedBill.setNoOfUnits(waterBill.getNoOfUnits());
            selectedBill.setAmount(waterBill.getAmount());
            //selectedBill.setCertification(waterBill.getCertification());
            //selectedBill.setCertifiedDate(waterBill.getCertifiedDate());
            selectedBill.setTraineeStaffId(waterBill.getTraineeStaffId());
            selectedBill.setUserKey(waterBill.getUserKey());
            waterBillRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse removeWaterBill (String billNo){
        WaterBills selectedBill = waterBillRepo.findBybillNo(billNo);
        try{
            waterBillRepo.delete(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting the bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public billStatusModel getStatusCount(String status){
        List<WaterBills> pendingBills = waterBillRepo.findByCertification(status);
        billStatusModel pendingList = new billStatusModel();
        pendingList.setBillType("water");
        pendingList.setStatus(status);
        pendingList.setCount(pendingBills.size());
        return pendingList;
    }

    public List<yearExpenseModel> getExpensesByYear(String year){

        List<yearExpenseModel> sum = new ArrayList<yearExpenseModel>();

        try{
            List<WaterBills> totalList = getwaterBillByYear(year);
            for(int i = 1; i < 13 ; i++){

                String month = year + "-" + String.format("%02d",i);
                float monthSum = 0;

                for (WaterBills rs: totalList ) {
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
            List<WaterBills> totalList = getwaterBillByMonth(month);
            List<String> years = waterBillRepo.findDistinctFirstByPeriodEndingWith(month);


            for(String yr : years){

                float monthSum = 0;

                for (WaterBills rs: totalList ) {
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
            List<String> locations = waterBillRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<WaterBills> waterBills = waterBillRepo.findByLocationAndPeriodStartingWith(rs,year);

                for (WaterBills wb: waterBills ) {
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
            List<String> locations = waterBillRepo.findDistinctByLocation();

            for(String rs : locations){

                float locationSum = 0;
                List<WaterBills> waterBills = waterBillRepo.findByLocationAndPeriodEndingWith(rs,month);

                for (WaterBills wb: waterBills ) {
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

        WaterBills selectedBill = waterBillRepo.findBybillNo(bill.getBillId());
        try{
            selectedBill.setCertification(bill.getStatus());
            LocalDateTime currentDateTime = LocalDateTime.now();
            String timeNow = currentDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            selectedBill.setCertifiedDate(timeNow);
            waterBillRepo.save(selectedBill);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating the bill approval ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
