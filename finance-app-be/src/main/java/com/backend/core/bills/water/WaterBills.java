package com.backend.core.bills.water;

import javax.persistence.*;

@Entity
@Table(name = "water_bills")
public class WaterBills {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    @Column(name = "billno", nullable = false, unique = true)
    private String billNo;
    private String period;
    private String location;
    private int previousReading;
    private int currentReading;
    private int noOfUnits;
    private float amount;
    private String certification = "pending";
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;


    public WaterBills(){

    }

    public WaterBills(String billNo, String period, String location, int previousReading, int currentReading,
                      int noOfUnits, float amount, String certification, String certifiedDate,
                      String datetime, int traineeStaffId, int userKey) {
        super();
        this.billNo=billNo;
        this.period = period;
        this.location = location;
        this.previousReading = previousReading;
        this.currentReading = currentReading;
        this.noOfUnits = noOfUnits;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public String getBillNo() { return billNo; }

    public void setBillNo(String billNo) { this.billNo = billNo;  }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

    public int getPreviousReading() {
        return previousReading;
    }

    public void setPreviousReading(int previousReading) {
        this.previousReading = previousReading;
    }

    public int getCurrentReading() {
        return currentReading;
    }

    public void setCurrentReading(int currentReading) {
        this.currentReading = currentReading;
    }

    public int getNoOfUnits() {
        return noOfUnits;
    }

    public void setNoOfUnits(int noOfUnits) {
        this.noOfUnits = noOfUnits;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public String getCertifiedDate() {
        return certifiedDate;
    }

    public void setCertifiedDate(String certifiedDate) {
        this.certifiedDate = certifiedDate;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public int getTraineeStaffId() {
        return traineeStaffId;
    }

    public void setTraineeStaffId(int traineeStaffId) {
        this.traineeStaffId = traineeStaffId;
    }

    public int getUserKey() {
        return userKey;
    }

    public void setUserKey(int userKey) {
        this.userKey = userKey;
    }
}
