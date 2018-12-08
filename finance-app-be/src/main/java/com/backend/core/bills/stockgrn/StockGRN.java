package com.backend.core.bills.stockgrn;

import javax.persistence.*;

@Entity
@Table(name = "stock_grn")
public class StockGRN {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int grnNo;
    private String description;
    private float amount;
    private String certification;
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public StockGRN(String description, float amount, String certification,
                    String certifiedDate, String datetime, int traineeStaffId, int userKey) {
        super();
        this.description = description;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public StockGRN(){

    }

    public int getGrnNo() {
        return grnNo;
    }

    public void setGrnNo(int grnNo) {
        this.grnNo = grnNo;
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
