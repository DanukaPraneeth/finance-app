package com.backend.core.bills.electricity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ElectricityBillRepo extends JpaRepository<ElectricityBill, String> {

    ElectricityBill findBybillNo(String billNo);
    List<ElectricityBill> findByPeriod(String period);

    @Query("select c from ElectricityBill c where c.period like %?1")
    List<ElectricityBill> findByPeriodEndsWith(String chars);

    @Query("select c from ElectricityBill c where c.period like ?1%")
    List<ElectricityBill> findByPeriodStartsWith(String chars);

    List<ElectricityBill> findByCertification(String status);

    @Query("select distinct c.period from ElectricityBill c where c.period like %?1")
    List<String> findDistinctFirstByPeriodEndingWith(String month);

    @Query("select distinct c.location from ElectricityBill c")
    List<String> findDistinctByLocation();

    @Query("select c from ElectricityBill c where c.location like ?1 and c.period like ?2%")
    List<ElectricityBill> findByLocationAndPeriodStartingWith(String location, String year);

    @Query("select c from ElectricityBill c where c.location like ?1 and c.period like %?2")
    List<ElectricityBill> findByLocationAndPeriodEndingWith(String location, String month);

}
