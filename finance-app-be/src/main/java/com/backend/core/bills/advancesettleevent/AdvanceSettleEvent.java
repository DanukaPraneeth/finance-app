package com.backend.core.bills.advancesettleevent;

import javax.persistence.*;

@Entity
@Table(name = "advance_settle_event")
public class AdvanceSettleEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int settlementNo;
    private float refundAmount;
    private float additionalAmount;
    private float totalExpense;
    private String certification;
    private String certifiedDate;
    @Column(name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public AdvanceSettleEvent(float refundAmount, float additionalAmount,
                              float totalExpense, String certification, String certifiedDate,
                              String datetime, int traineeStaffId, int userKey) {
        super();
        this.refundAmount = refundAmount;
        this.additionalAmount = additionalAmount;
        this.totalExpense = totalExpense;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public AdvanceSettleEvent(){}

    public int getSettlementNo() {
        return settlementNo;
    }

    public void setSettlementNo(int settlementNo) {
        this.settlementNo = settlementNo;
    }

    public float getRefundAmount() {
        return refundAmount;
    }

    public void setRefundAmount(float refundAmount) {
        this.refundAmount = refundAmount;
    }

    public float getAdditionalAmount() {
        return additionalAmount;
    }

    public void setAdditionalAmount(float additionalAmount) {
        this.additionalAmount = additionalAmount;
    }

    public float getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(float totalExpense) {
        this.totalExpense = totalExpense;
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
