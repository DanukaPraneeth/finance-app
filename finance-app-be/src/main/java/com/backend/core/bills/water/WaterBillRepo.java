package com.backend.core.bills.water;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WaterBillRepo extends JpaRepository<WaterBills, Integer> {
    WaterBills findBybillNo(String billNo);
    WaterBills findByPeriod(String month);

}
