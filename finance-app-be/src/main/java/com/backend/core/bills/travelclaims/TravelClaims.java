package com.backend.core.bills.travelclaims;

public class TravelClaims {

    private String claimerId;
    private String name;
    private String designation;
    private String description;
    private int period;
    private float amount;
    private String certification;
    private String certifiedDate;
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public TravelClaims(String claimerId, String name, String designation, String description,
                        int period, float amount, String certification, String certifiedDate,
                        String datetime, int traineeStaffId, int userKey) {
        this.claimerId = claimerId;
        this.name = name;
        this.designation = designation;
        this.description = description;
        this.period = period;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public String getClaimerId() {
        return claimerId;
    }

    public void setClaimerId(String claimerId) {
        this.claimerId = claimerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getPeriod() {
        return period;
    }

    public void setPeriod(int period) {
        this.period = period;
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
