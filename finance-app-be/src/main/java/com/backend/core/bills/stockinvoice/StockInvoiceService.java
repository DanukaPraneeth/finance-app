package com.backend.core.bills.stockinvoice;

import com.backend.core.MessageResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StockInvoiceService {

    private static Logger log = LoggerFactory.getLogger(StockInvoiceService.class);
    private MessageResponse messageResponse = new MessageResponse();

    @Autowired
    private StockInvoiceRepo stockInvoiceRepo;

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
