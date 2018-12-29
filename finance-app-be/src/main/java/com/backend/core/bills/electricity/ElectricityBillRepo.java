package com.backend.core.bills.electricity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ElectricityBillRepo extends JpaRepository<ElectricityBill, String> {

    ElectricityBill findBybillNo(String billNo);
    List<ElectricityBill> findByPeriod(String period);

    @Query("select c from ElectricityBill c where c.period like %?1")
    List<ElectricityBill> findByNameEndsWith(String chars);

    @Query("select c from ElectricityBill c where c.period like ?1%")
    List<ElectricityBill> findByNameStartsWith(String chars);

    List<ElectricityBill> findByCertification(String status);

}
