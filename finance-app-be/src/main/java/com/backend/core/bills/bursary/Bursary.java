package com.backend.core.bills.bursary;

import javax.persistence.*;

@Entity
@Table(name = "bursary")
public class Bursary {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int paymentId;
    private String month;
    private String description;
    private float amount;
    private String certification;
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public Bursary(String month, String description, float amount, String certification,
                   String certifiedDate, String datetime, int traineeStaffId, int userKey) {
        super();
        this.month = month;
        this.description = description;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public Bursary(){}

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
