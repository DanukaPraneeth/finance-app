package com.backend.core.users;

import com.backend.core.MessageResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.logging.Logger;

@RestController
public class StaffController {

    private static Log log = LogFactory.getLog(StaffController.class);

    @Autowired
    private StaffService staffService;

//    public List<Staff> newStaff = new ArrayList<Staff>(Arrays.asList(
//            new Staff("Rs 750","Bill 2", "string1",1)
//    ));

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<Staff> newStaff = new ArrayList<Staff>();
    private Staff staff = new Staff();
    private ObjectMapper objectMapper = new ObjectMapper();
    private MessageResponse message = new MessageResponse();
    private StaffLoginResponse loginResponse = new StaffLoginResponse();

//    @RequestMapping("/staff")
//    public List<Staff> getAllStaff(){
//        return staffService.getAllStaff();
//    }
//
//    @RequestMapping("/staff/{id}")
//    public Staff getStaff(@PathVariable int id){
//        return staffService.getStaff(id);
//    }

    @RequestMapping(method = RequestMethod.POST, value = "/staff")
    public MessageResponse addStaff(@RequestBody String staffDetails) throws IOException{

        String passwrd = "";
        Integer lastId = getLastId();

        if(!mapRequsetBody(staffDetails)){
            return message;
        }

        if(lastId == null){
            staff.setUserKey(1);
        }else{
            staff.setUserKey(lastId+1);
        }
        passwrd = passwordEncoder.encode(staff.getPassword());
        staff.setPassword(passwrd);
        newStaff.add(0,staff);
        try{
            staffService.addStaff(newStaff.get(0));
            message.setSuccess(true);
        }catch (Exception e){
            log.info("Error in inserting into the database", e);
            message.setSuccess(false);
        }
        return message;
    }

//    @RequestMapping(method = RequestMethod.PUT, value = "/staff/{id}")
//    public void updateStaff(@PathVariable int id, @RequestBody Staff employee){
//        staffService.updateStaff(id, employee);
//    }
//
//    @RequestMapping(method = RequestMethod.DELETE, value = "/staff/{id}")
//    public void removeStaff(@PathVariable int id){
//        staffService.remveStaff(id);
//    }

    @RequestMapping(method = RequestMethod.POST, value = "/staff/login")
    public StaffLoginResponse getStaffByUserName(@RequestBody String staffDetails){
        String passwrd = "";
        if(!mapRequsetBody(staffDetails)){
            loginResponse.setLoggedIn(false);
            loginResponse.setUserName(null);
            return loginResponse;
        }
        loginResponse.setUserName(staff.getUserName());
        try{
            passwrd = staffService.getPasswordByUserName(staff.getUserName()).getPassword();
            loginResponse.setLoggedIn(passwordEncoder.matches(staff.getPassword(),passwrd));
        }catch (Exception e){
            log.info("Error in retrieving data from db", e);
            loginResponse.setLoggedIn(false);
        }
        return loginResponse;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public Integer getLastId(){
        Staff lastStaff = staffService.getTopByOrderByUserKeyDesc();
        if(lastStaff == null){
            return null;
        }
        return lastStaff.getUserKey();
    }

    public boolean mapRequsetBody(String staffDetails){
        try {
            staff = objectMapper.readValue(staffDetails, Staff.class);
        }catch (IOException e){
            log.info("Error in request body json", e);
            return false;
        }
        return true;
    }
}
