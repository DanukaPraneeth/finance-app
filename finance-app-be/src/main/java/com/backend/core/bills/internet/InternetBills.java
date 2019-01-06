package com.backend.core.bills.internet;

import javax.persistence.*;

@Entity
@Table(name = "internet_bills")
public class InternetBills {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "billno", nullable = false, unique = true)
    private String billNo;
    private String period;
    private String location;
    private float amount;
    private String certification = "pending";
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public InternetBills(){ }

    public InternetBills(String billNo, String period, String location, float amount, String certification,
                         String certifiedDate, String datetime, int traineeStaffId, int userKey) {
        super();
        this.billNo = billNo;
        this.period = period;
        this.location = location;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getBillNo() {
        return billNo;
    }

    public void setBillNo(String billNo) { this.billNo = billNo; }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getLocation() { return location; }

    public void setLocation(String location) { this.location = location; }

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
