package com.backend.core.bills.examinationclaims;

import javax.persistence.*;

@Entity
@Table(name = "examination_claims")
public class ExaminationClaims {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int examClaimId;
    private String lectureId;
    private String lectureName;
    private String designation;
    private String description;
    private float amount;
    private String certification;
    private String certifiedDate;
    @Column (name = "date")
    private String datetime;
    private int traineeStaffId;
    private int userKey;

    public ExaminationClaims(String lectureId, String lectureName, String designation,
                 String description, float amount, String certification, String certifiedDate,
                 String datetime, int traineeStaffId, int userKey) {
        super();
        this.lectureId = lectureId;
        this.lectureName = lectureName;
        this.designation = designation;
        this.description = description;
        this.amount = amount;
        this.certification = certification;
        this.certifiedDate = certifiedDate;
        this.datetime = datetime;
        this.traineeStaffId = traineeStaffId;
        this.userKey = userKey;
    }

    public ExaminationClaims(){

    }

    public int getExamClaimId() {
        return examClaimId;
    }

    public void setExamClaimId(int examClaimId) {
        this.examClaimId = examClaimId;
    }

    public String getLectureId() {
        return lectureId;
    }

    public void setLectureId(String lectureId) {
        this.lectureId = lectureId;
    }

    public String getLectureName() {
        return lectureName;
    }

    public void setLectureName(String lectureName) {
        this.lectureName = lectureName;
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

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getCertifiedDate() {
        return certifiedDate;
    }

    public void setCertifiedDate(String certifiedDate) {
        this.certifiedDate = certifiedDate;
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
