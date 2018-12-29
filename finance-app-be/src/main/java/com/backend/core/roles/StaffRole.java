package com.backend.core.roles;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "staff_role")
public class StaffRole {

    @Id
    @Column(nullable = false, unique = true)
    private int roleId;
    @Column(nullable = false, unique = true)
    private String roleName;

    public StaffRole(){}

    public StaffRole(int roleId, String roleName) {
        super();
        this.roleId = roleId;
        this.roleName = roleName;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
