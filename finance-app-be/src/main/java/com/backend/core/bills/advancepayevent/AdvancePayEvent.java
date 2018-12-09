package com.backend.core.bills.advancepayevent;

import javax.persistence.*;

@Entity
@Table(name = "advance_pay_event")
public class AdvancePayEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int recId;
    private String recName;
    private String designation;
    private String description;
    private float amount;
    private String certification;
    private String certifiedDate;
    @Column(name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public AdvancePayEvent(){

    }

    public AdvancePayEvent( String recName, String designation, String description,
                           float amount, String certification, String certifiedDate,
                           String datetime, int traineeStaffId, int userKey) {
        super();
        this.recName = recName;
        this.designation = designation;
        this.description = description;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public int getRecId() {
        return recId;
    }

    public void setRecId(int recId) {
        this.recId = recId;
    }

    public String getRecName() {
        return recName;
    }

    public void setRecName(String recName) {
        this.recName = recName;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
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
