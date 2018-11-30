package com.backend.core.users;

import javax.persistence.*;


@Entity
@Table (name = "staff")
public class Staff {
//@SequenceGenerator(name="seq", initialValue=20, allocationSize=9999999, sequenceName = "SEQ")

    @Id
    @Column(nullable = false, unique = true)
    private Integer userKey;
    @Column(nullable = false, unique = true)
    private String userName;
    private String password;
    private int userRole;

    public Staff(){

    }

    public Staff( Integer userKey, String userName, String password, int userRole) {
        super();
        this.userKey = userKey;
        this.userName = userName;
        this.password = password;
        this.userRole = userRole;
    }

    public Integer getUserKey() {
        return userKey;
    }

    public void setUserKey(Integer userKey) {
        this.userKey = userKey;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getUserRole() {
        return userRole;
    }

    public void setUserRole(int userRole) {
        this.userRole = userRole;
    }

    public String toString(){
        return userKey +", "+ userName +", "+password +", "+ userRole;
    }
}
