package com.backend.core.bills.codebook;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CodeBookController {

    @Autowired
    private CodeBookService codeBookService;

    @RequestMapping("/bills/codebook")
    public List<CodeBook> getAllCodeBooks(){
        return codeBookService.getAllCodeBook();
    }

    @RequestMapping("/bills/codebook/id/{descId}")
    public CodeBook getCodeBook(@PathVariable String descId){
        return codeBookService.getCodeBook(descId);
    }

    @RequestMapping("/bills/codebook/faculty/{faculty}")
    public CodeBook getCodeBookByFaculty(@PathVariable String faculty){
        return codeBookService.getCodeBookByFaculty(faculty);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/codebook")
    public MessageResponse addCodeBook(@RequestBody CodeBook codeBook){
        return codeBookService.addCodeBook(codeBook);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/codebook/id/{descId}")
    public MessageResponse updateCodeBook(@PathVariable String descId, @RequestBody CodeBook codeBook){
        return codeBookService.updateCodeBook(descId, codeBook);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/codebook/id/{descId}")
    public MessageResponse removeCodeBook(@PathVariable String descId){
        return codeBookService.remveCodeBook(descId);
    }

}
