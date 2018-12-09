package com.backend.core.bills.mahapola;

import com.backend.core.MessageResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MahapolaService {

    private static Logger log = LoggerFactory.getLogger(MahapolaService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private MahapolaRepo mahapolaRepo;

    public List<Mahapola> getAllMahapola() {
        List<Mahapola> mahapola = new ArrayList<Mahapola>();
        mahapolaRepo.findAll()
                .forEach(mahapola::add);

        return mahapola;
    }

    public Mahapola getMahapolaBymonth (String month){

        return mahapolaRepo.findBymonth(month);
    }

    public Mahapola getMahapola (String paymentId){

        return mahapolaRepo.findBypaymentId(Integer.parseInt(paymentId));
    }

    public MessageResponse addMahapola(Mahapola Mahapola){
        try {
            mahapolaRepo.save(Mahapola);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateMahapola (String paymentId , Mahapola Mahapola){
        try {
            mahapolaRepo.save(Mahapola);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveMahapola (String paymentId){
        try {
            Mahapola id = mahapolaRepo.findBypaymentId(Integer.parseInt(paymentId));
            mahapolaRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
