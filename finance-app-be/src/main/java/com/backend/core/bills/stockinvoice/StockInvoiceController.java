package com.backend.core.bills.stockinvoice;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StockInvoiceController {

    @Autowired
    private StockInvoiceService stockInvoiceService;

    @RequestMapping("/bills/stockinvoice")
    public List<StockInvoice> getAllStockInvoices(){
        return stockInvoiceService.getAllStockInvoice();
    }

    @RequestMapping("/bills/stockinvoice/id/{invoiceNo}")
    public StockInvoice getStockInvoice(@PathVariable String invoiceNo){
        return stockInvoiceService.getStockInvoice(invoiceNo);
    }

    @RequestMapping("/bills/stockinvoice/order/{orderNo}")
    public StockInvoice getStockInvoiceByorderNo(@PathVariable String orderNo){
        return stockInvoiceService.getStockInvoiceByorderNo(orderNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/stockinvoice")
    public MessageResponse addStockInvoice(@RequestBody StockInvoice stockInvoice){
        return stockInvoiceService.addStockInvoice(stockInvoice);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/stockinvoice/id/{invoiceNo}")
    public MessageResponse updateStockInvoice(@PathVariable String invoiceNo, @RequestBody StockInvoice stockInvoice){
        return stockInvoiceService.updateStockInvoice(invoiceNo, stockInvoice);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/stockinvoice/id/{invoiceNo}")
    public MessageResponse removeStockInvoice(@PathVariable String invoiceNo){
        return stockInvoiceService.remveStockInvoice(invoiceNo);
    }

}
