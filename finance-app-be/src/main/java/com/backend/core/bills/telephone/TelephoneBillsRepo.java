package com.backend.core.bills.telephone;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TelephoneBillsRepo extends JpaRepository<TelephoneBills, String> {
        TelephoneBills findBybillId(int billId);
        TelephoneBills findBymonth(String month);
}
