package com.backend.core.bills.examinationclaims;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExaminationClaimsService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private ExaminationClaimsRepo examinationClaimsRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<ExaminationClaims> getAllExaminationClaims() {
        List<ExaminationClaims> examinationClaims = new ArrayList<ExaminationClaims>();
        examinationClaimsRepo.findAll()
                .forEach(examinationClaims::add);

        return examinationClaims;
    }

    public ExaminationClaims getExaminationClaims (String examClaimId){

        return examinationClaimsRepo.findByexamClaimId(Integer.parseInt(examClaimId));
    }

    public ExaminationClaims getExaminationClaimsBylectureId (String lectureId){

        return examinationClaimsRepo.findBylectureId(lectureId);
    }

    public MessageResponse addExaminationClaims(ExaminationClaims ExaminationClaims){
        try {
            examinationClaimsRepo.save(ExaminationClaims);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateExaminationClaims (String examClaimId , ExaminationClaims ExaminationClaims){
        try {
            examinationClaimsRepo.save(ExaminationClaims);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveExaminationClaims (long examClaimId){
        try {
            ExaminationClaims id = examinationClaimsRepo.findByexamClaimId(examClaimId);
            examinationClaimsRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
