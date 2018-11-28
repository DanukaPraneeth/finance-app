package com.backend.core.users;

import javax.persistence.*;


@Entity
@Table (name = "staff2")
public class Staff {
//@SequenceGenerator(name="seq", initialValue=20, allocationSize=9999999, sequenceName = "SEQ")

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Integer userKey;
    private String name;
    private String password;
    private String saltValue;
    private int role;

    public Staff(){

    }

    public Staff( String name, String password, String saltValue, int role) {
        super();
        this.name = name;
        this.password = password;
        this.saltValue = saltValue;
        this.role = role;
    }

    public Integer getUserKey() {
        return userKey;
    }

    public void setUserKey(Integer userKey) {
        this.userKey = userKey;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSaltValue() {
        return saltValue;
    }

    public void setSaltValue(String saltValue) {
        this.saltValue = saltValue;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }
}
