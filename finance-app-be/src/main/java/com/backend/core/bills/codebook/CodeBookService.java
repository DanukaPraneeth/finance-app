package com.backend.core.bills.codebook;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CodeBookService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private CodeBookRepo codeBookRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<CodeBook> getAllCodeBook() {
        List<CodeBook> codeBook = new ArrayList<CodeBook>();
        codeBookRepo.findAll()
                .forEach(codeBook::add);

        return codeBook;
    }

    public CodeBook getCodeBookByFaculty (String faculty){

        return codeBookRepo.findByfaculty(faculty);
    }

    public CodeBook getCodeBook(String descId){

        return codeBookRepo.findBydescId(Integer.parseInt(descId));
    }

    public MessageResponse addCodeBook(CodeBook CodeBook){
        try {
            codeBookRepo.save(CodeBook);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateCodeBook (String descId , CodeBook CodeBook){
        try {
            codeBookRepo.save(CodeBook);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveCodeBook (String descId){
        try {
            CodeBook id = codeBookRepo.findBydescId(Integer.parseInt(descId));
            codeBookRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
