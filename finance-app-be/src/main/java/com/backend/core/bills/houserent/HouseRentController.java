package com.backend.core.bills.houserent;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HouseRentController {

    @Autowired
    private HouseRentService houseRentService;

    @RequestMapping("/bills/houserent")
    public List<HouseRent> getAllHouseRents(){
        return houseRentService.getAllHouseRent();
    }

    @RequestMapping("/bills/houserent/id/{voucherNo}")
    public HouseRent getHouseRent(@PathVariable String voucherNo){
        return houseRentService.getHouseRent(voucherNo);
    }

    @RequestMapping("/bills/houserent/period/{period}")
    public HouseRent getHouseRenByperiod(@PathVariable String period){
        return houseRentService.getHouseRentByperiod(period);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/bills/houserent")
    public MessageResponse addHouseRent(@RequestBody HouseRent houseRent){
        return houseRentService.addHouseRent(houseRent);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/houserent/id/{voucherNo}")
    public MessageResponse updateHouseRent(@PathVariable String voucherNo, @RequestBody HouseRent houseRent){
        return houseRentService.updateHouseRent(voucherNo, houseRent);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/houserent/id/{voucherNo}")
    public MessageResponse removeHouseRent(@PathVariable String voucherNo){
        return houseRentService.remveHouseRent(voucherNo);
    }

}
