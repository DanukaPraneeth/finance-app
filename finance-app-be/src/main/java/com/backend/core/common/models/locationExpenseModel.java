package com.backend.core.common.models;

public class locationExpenseModel {

    private String location;
    private float expense;

    public locationExpenseModel(String location, float expense){
        this.location = location;
        this.expense = expense;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public float getExpense() {
        return expense;
    }

    public void setExpense(float expense) {
        this.expense = expense;
    }


}
