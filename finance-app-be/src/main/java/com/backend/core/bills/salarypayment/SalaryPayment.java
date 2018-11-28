package com.backend.core.bills.salarypayment;

public class SalaryPayment {

    private String paymentType;
    private float amountPmntStaff;
    private float amountTmpStaff;
    private float amountTmptStaff;
    private float etfAmount;
    private String certification;
    private String certifiedDate;
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public SalaryPayment(String paymentType, float amountPmntStaff, float amountTmpStaff,
                     float amountTmptStaff, float etfAmount, String certification,
                     String certifiedDate, String datetime, int traineeStaffId, int userKey) {
        this.paymentType = paymentType;
        this.amountPmntStaff = amountPmntStaff;
        this.amountTmpStaff = amountTmpStaff;
        this.amountTmptStaff = amountTmptStaff;
        this.etfAmount = etfAmount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public float getAmountPmntStaff() {
        return amountPmntStaff;
    }

    public void setAmountPmntStaff(float amountPmntStaff) {
        this.amountPmntStaff = amountPmntStaff;
    }

    public float getAmountTmpStaff() {
        return amountTmpStaff;
    }

    public void setAmountTmpStaff(float amountTmpStaff) {
        this.amountTmpStaff = amountTmpStaff;
    }

    public float getAmountTmptStaff() {
        return amountTmptStaff;
    }

    public void setAmountTmptStaff(float amountTmptStaff) {
        this.amountTmptStaff = amountTmptStaff;
    }

    public float getEtfAmount() {
        return etfAmount;
    }

    public void setEtfAmount(float etfAmount) {
        this.etfAmount = etfAmount;
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
