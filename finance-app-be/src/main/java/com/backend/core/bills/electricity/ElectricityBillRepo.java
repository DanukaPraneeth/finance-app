package com.backend.core.bills.electricity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ElectricityBillRepo extends JpaRepository<ElectricityBill, String> {

    ElectricityBill findBybillNo(String billNo);

}
