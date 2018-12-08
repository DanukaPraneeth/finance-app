package com.backend.core.bills.salarypayment;

import javax.persistence.*;

@Entity
@Table(name = "salary_payment")
public class SalaryPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int paymentId;
    private String paymentType;
    private float amountPmntStaff;
    private float amountTmpStaff;
    private float amountTmptStaff;
    private float etfAmount;
    private String certification;
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public SalaryPayment(String paymentType, float amountPmntStaff, float amountTmpStaff,
                     float amountTmptStaff, float etfAmount, String certification,
                     String certifiedDate, String datetime, int traineeStaffId, int userKey) {
        super();
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

    public SalaryPayment(){

    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
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
