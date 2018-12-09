package com.backend.core.bills.internet;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InternetBillsRepo extends JpaRepository<InternetBills, String> {
        InternetBills findBybillId(int billId);
        InternetBills findBymonth(String month);
}
