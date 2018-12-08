package com.backend.core.bills.stockgrn;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockGRNService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private StockGRNRepo stockGRNRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<StockGRN> getAllStockGRN() {
        List<StockGRN> stockGRN = new ArrayList<StockGRN>();
        stockGRNRepo.findAll()
                .forEach(stockGRN::add);

        return stockGRN;
    }

    public StockGRN getStockGRN (String grnNo){

        return stockGRNRepo.findBygrnNo(Integer.parseInt(grnNo));
    }

    public MessageResponse addStockGRN(StockGRN StockGRN){
        try {
            stockGRNRepo.save(StockGRN);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateStockGRN (String grnNo , StockGRN StockGRN){
        try {
            stockGRNRepo.save(StockGRN);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveStockGRN (String grnNo){
        try {
            StockGRN id = stockGRNRepo.findBygrnNo(Integer.parseInt(grnNo));
            stockGRNRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
