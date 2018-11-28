package com.backend.core.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class StaffController {

    @Autowired
    private StaffService staffService;

//    public List<Staff> newStaff = new ArrayList<Staff>(Arrays.asList(
//            new Staff("Rs 750","Bill 2", "string1",1)
//    ));

    public List<Staff> newStaff = new ArrayList<Staff>();
    private Staff staff = new Staff();
    private int i = 0;

    @RequestMapping("/staff")
    public List<Staff> getAllStaff(){
        return staffService.getAllStaff();
    }

    @RequestMapping("/staff/{id}")
    public Staff getStaff(@PathVariable int id){
        return staffService.getStaff(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/staff")
    public void addStaff(){
        staff.setName("name"+i);
        staff.setSaltValue("test");
        staff.setPassword("123");
        staff.setRole(1);
        newStaff.add(staff);
        staffService.addStaff(newStaff.get(0));
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/staff/{id}")
    public void updateStaff(@PathVariable int id, @RequestBody Staff employee){
        staffService.updateStaff(id, employee);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/staff/{id}")
    public void removeStaff(@PathVariable int id){
        staffService.remveStaff(id);
    }

    @RequestMapping("/staff/name/{name}")
    public List<Staff> getStaffByName(@PathVariable String name){
        return staffService.getByName(name);
    }
}
