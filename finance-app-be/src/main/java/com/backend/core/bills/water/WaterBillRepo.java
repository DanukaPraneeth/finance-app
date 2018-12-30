package com.backend.core.bills.water;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WaterBillRepo extends JpaRepository<WaterBills, Integer> {
    WaterBills findBybillNo(String billNo);
    List<WaterBills> findByPeriod(String month);

    @Query("select c from WaterBills c where c.period like %?1")
    List<WaterBills> findByPeriodEndsWith(String month);

    @Query("select c from WaterBills c where c.period like ?1%")
    List<WaterBills> findByPeriodStartsWith(String year);

    List<WaterBills> findByCertification(String status);

    @Query("select distinct c.period from WaterBills c where c.period like %?1")
    List<String> findDistinctFirstByPeriodEndingWith(String month);

    @Query("select distinct c.location from WaterBills c")
    List<String> findDistinctByLocation();

    @Query("select c from WaterBills c where c.location like ?1 and c.period like ?2%")
    List<WaterBills> findByLocationAndPeriodStartingWith(String location, String year);

    @Query("select c from WaterBills c where c.location like ?1 and c.period like %?2")
    List<WaterBills> findByLocationAndPeriodEndingWith(String location, String month);
}
