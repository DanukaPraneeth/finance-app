package com.backend.core.bills.stockgrn;

import com.backend.core.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StockGRNController {

    @Autowired
    private StockGRNService stockGRNService;

    @RequestMapping("/bills/stockgrn")
    public List<StockGRN> getAllStockGRNs(){
        return stockGRNService.getAllStockGRN();
    }

    @RequestMapping("/bills/stockgrn/id/{grnNo}")
    public StockGRN getStockGRN(@PathVariable String grnNo){
        return stockGRNService.getStockGRN(grnNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/bills/stockgrn")
    public MessageResponse addStockGRN(@RequestBody StockGRN stockGRN){
        return stockGRNService.addStockGRN(stockGRN);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/bills/stockgrn/id/{grnNo}")
    public MessageResponse updateStockGRN(@PathVariable String grnNo, @RequestBody StockGRN stockGRN){
        return stockGRNService.updateStockGRN(grnNo, stockGRN);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/bills/stockgrn/id/{grnNo}")
    public MessageResponse removeStockGRN(@PathVariable String grnNo){
        return stockGRNService.remveStockGRN(grnNo);
    }

}
