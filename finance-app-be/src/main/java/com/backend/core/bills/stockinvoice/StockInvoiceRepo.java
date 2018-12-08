package com.backend.core.bills.stockinvoice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StockInvoiceRepo extends JpaRepository<StockInvoice, String> {
        StockInvoice findByinvoiceNo(int invoiceNo);
        StockInvoice findByorderNo(int orderNo);
}
