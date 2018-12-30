package com.backend.core.common.models;

public class yearExpenseModel {

    private String month;
    private float expense;

    public yearExpenseModel(String month, float expense){
        this.month = month;
        this.expense = expense;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public float getExpense() {
        return expense;
    }

    public void setExpense(float expense) {
        this.expense = expense;
    }

}
