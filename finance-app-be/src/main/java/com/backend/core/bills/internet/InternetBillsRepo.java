package com.backend.core.bills.internet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InternetBillsRepo extends JpaRepository<InternetBills, String> {

        InternetBills findByBillNo(String billNo);
        List<InternetBills> findByPeriod(String period);

        @Query("select c from InternetBills c where c.period like %?1")
        List<InternetBills> findByPeriodEndsWith(String month);

        @Query("select c from InternetBills c where c.period like ?1%")
        List<InternetBills> findByPeriodStartsWith(String year);

        List<InternetBills> findByCertification(String status);

        @Query("select distinct c.period from InternetBills c where c.period like %?1")
        List<String> findDistinctFirstByPeriodEndingWith(String month);

        @Query("select distinct c.location from InternetBills c")
        List<String> findDistinctByLocation();

        @Query("select c from InternetBills c where c.location like ?1 and c.period like ?2%")
        List<InternetBills> findByLocationAndPeriodStartingWith(String location, String year);

        @Query("select c from InternetBills c where c.location like ?1 and c.period like %?2")
        List<InternetBills> findByLocationAndPeriodEndingWith(String location, String month);
}
