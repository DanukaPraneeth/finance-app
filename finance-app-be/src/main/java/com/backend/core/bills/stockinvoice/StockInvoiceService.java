package com.backend.core.bills.stockinvoice;

import com.backend.core.MessageResponse;
import com.backend.core.users.StaffController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockInvoiceService {

    private static Log log = LogFactory.getLog(StaffController.class);
    @Autowired
    private StockInvoiceRepo stockInvoiceRepo;
    private MessageResponse messageResponse = new MessageResponse();
    
    public List<StockInvoice> getAllStockInvoice() {
        List<StockInvoice> stockInvoice = new ArrayList<StockInvoice>();
        stockInvoiceRepo.findAll()
                .forEach(stockInvoice::add);

        return stockInvoice;
    }

    public StockInvoice getStockInvoice (String invoiceNo){

        return stockInvoiceRepo.findByinvoiceNo(Integer.parseInt(invoiceNo));
    }

    public StockInvoice getStockInvoiceByorderNo (String orderNo){

        return stockInvoiceRepo.findByorderNo(Integer.parseInt(orderNo));
    }

    public MessageResponse addStockInvoice(StockInvoice StockInvoice){
        try {
            stockInvoiceRepo.save(StockInvoice);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while entering bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse updateStockInvoice (String invoiceNo , StockInvoice StockInvoice){
        try {
            stockInvoiceRepo.save(StockInvoice);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while updating bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }

    public MessageResponse remveStockInvoice (String invoiceNo){
        try {
            StockInvoice id = stockInvoiceRepo.findByinvoiceNo(Integer.parseInt(invoiceNo));
            stockInvoiceRepo.delete(id);
            messageResponse.setSuccess(true);
        }catch (Exception e){
            log.error("Error while deleting bill record ", e);
            messageResponse.setSuccess(false);
        }
        return messageResponse;
    }
}
