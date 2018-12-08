package com.backend.core.bills.examinationclaims;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExaminationClaimsController {

    @Autowired
    private ExaminationClaimsService examinationClaimsService;

    @RequestMapping("/bills/examinationclaims")
    public List<ExaminationClaims> getAllExaminationClaimss(){
        return examinationClaimsService.getAllExaminationClaims();
    }

    @RequestMapping("/bills/examinationclaims/id/{examClaimId}")
    public ExaminationClaims getExaminationClaims(@PathVariable String examClaimId){
        return examinationClaimsService.getExaminationClaims(examClaimId);
    }

    @RequestMapping("/bills/examinationclaims/lecid/{lecId}")
    public ExaminationClaims getExaminationClaimsBylectureId(@PathVariable String lecId){
        return examinationClaimsService.getExaminationClaimsBylectureId(lecId);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/examinationclaims")
    public MessageResponse addExaminationClaims(@RequestBody ExaminationClaims examinationClaims){
        return examinationClaimsService.addExaminationClaims(examinationClaims);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/examinationclaims/id/{examClaimId}")
    public MessageResponse updateExaminationClaims(@PathVariable String examClaimId, @RequestBody ExaminationClaims examinationClaims){
        return examinationClaimsService.updateExaminationClaims(examClaimId, examinationClaims);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/examinationclaims/id/{examClaimId}")
    public MessageResponse removeExaminationClaims(@PathVariable String examClaimId){
        return examinationClaimsService.remveExaminationClaims(Long.parseLong(examClaimId));
    }

}
