package com.backend.core.roles;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StaffRoleController {

    private static Log log = LogFactory.getLog(StaffRoleController.class);

    @Autowired
    private StaffRoleService staffRoleService;

    @RequestMapping(method = RequestMethod.GET, value = "/roles/all")
    public List<StaffRole> getAvailableRoles(){
        return staffRoleService.getAllRoles();
    }


}
