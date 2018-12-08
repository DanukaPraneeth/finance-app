package com.backend.core.bills.homeallowance;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HomeAllowanceController {

    @Autowired
    private HomeAllowanceService homeAllowanceService;

    @RequestMapping("/bills/homeallowance")
    public List<HomeAllowance> getAllHomeAllowances(){
        return homeAllowanceService.getAllHomeAllowance();
    }

    @RequestMapping("/bills/homeallowance/id/{empId}")
    public HomeAllowance getHomeAllowance(@PathVariable String empId){
        return homeAllowanceService.getHomeAllowance(empId);
    }

    @RequestMapping("/bills/homeallowance/name/{empId}")
    public HomeAllowance getHomeAllowanceByempName(@PathVariable String empName){
        return homeAllowanceService.getHomeAllowanceByempName(empName);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/homeallowance")
    public MessageResponse addHomeAllowance(@RequestBody HomeAllowance homeAllowance){
        return homeAllowanceService.addHomeAllowance(homeAllowance);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/homeallowance/id/{empId}")
    public MessageResponse updateHomeAllowance(@PathVariable String empId, @RequestBody HomeAllowance homeAllowance){
        return homeAllowanceService.updateHomeAllowance(empId, homeAllowance);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/homeallowance/id/{empId}")
    public MessageResponse removeHomeAllowance(@PathVariable String empId){
        return homeAllowanceService.remveHomeAllowance(empId);
    }

}
