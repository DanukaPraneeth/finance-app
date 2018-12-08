package com.backend.core.bills.stockgrn;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StockGRNRepo extends JpaRepository<StockGRN, String> {
        StockGRN findBygrnNo(int grnNo);
}
