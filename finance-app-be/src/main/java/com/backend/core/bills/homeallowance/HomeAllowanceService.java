package com.backend.core.bills.homeallowance;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HomeAllowanceService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private HomeAllowanceRepo homeAllowanceRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<HomeAllowance> getAllHomeAllowance() {
        List<HomeAllowance> homeAllowance = new ArrayList<HomeAllowance>();
        homeAllowanceRepo.findAll()
                .forEach(homeAllowance::add);

        return homeAllowance;
    }

    public HomeAllowance getHomeAllowance (String empId){

        return homeAllowanceRepo.findByempId(Integer.parseInt(empId));
    }

    public HomeAllowance getHomeAllowanceByempName (String empId){

        return homeAllowanceRepo.findByempName(empId);
    }

    public MessageResponse addHomeAllowance(HomeAllowance HomeAllowance){
        try {
            homeAllowanceRepo.save(HomeAllowance);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateHomeAllowance (String empId , HomeAllowance HomeAllowance){
        try {
            homeAllowanceRepo.save(HomeAllowance);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveHomeAllowance (String empId){
        try {
            HomeAllowance id = homeAllowanceRepo.findByempId(Integer.parseInt(empId));
            homeAllowanceRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
