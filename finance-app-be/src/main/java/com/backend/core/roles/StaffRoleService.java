package com.backend.core.roles;

import com.backend.core.users.Staff;
import com.backend.core.users.StaffRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Repository
public class StaffRoleService {

    @Autowired
    private StaffRoleRepo staffRoleRepo;

    private int i = 0;

    public List<StaffRole> getAllRoles(){

        List<StaffRole> staffRoles = new ArrayList<>();
        staffRoleRepo.findAll()
                .forEach(staffRoles::add);

        return staffRoles;
    }
}
