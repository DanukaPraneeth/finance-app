package com.backend.core.bills.houserent;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;

@Service
public class HouseRentService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private HouseRentRepo houseRentRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<HouseRent> getAllHouseRent() {
        List<HouseRent> houseRent = new ArrayList<HouseRent>();
        houseRentRepo.findAll()
                .forEach(houseRent::add);

        return houseRent;
    }

    public HouseRent getHouseRent (String voucherNo){

        return houseRentRepo.findByvoucherNo(Integer.parseInt(voucherNo));
    }

    public HouseRent getHouseRentByperiod (String period){

        return houseRentRepo.findByperiod(period);
    }

    public MessageResponse addHouseRent(HouseRent HouseRent){
        try {
            houseRentRepo.save(HouseRent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateHouseRent (String voucherNo , HouseRent HouseRent){
        try {
            houseRentRepo.save(HouseRent);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveHouseRent (String voucherNo){
        try {
            HouseRent id = houseRentRepo.findByvoucherNo(Integer.parseInt(voucherNo));
            houseRentRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
