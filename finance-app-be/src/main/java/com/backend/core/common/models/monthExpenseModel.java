package com.backend.core.common.models;

public class monthExpenseModel {

    private String year;
    private float expense;

    public monthExpenseModel(String year, float expense){
        this.year = year;
        this.expense = expense;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public float getExpense() {
        return expense;
    }

    public void setExpense(float expense) {
        this.expense = expense;
    }

}
