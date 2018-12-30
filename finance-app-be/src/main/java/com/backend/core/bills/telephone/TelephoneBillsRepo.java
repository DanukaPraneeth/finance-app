package com.backend.core.bills.telephone;

import com.backend.core.bills.electricity.ElectricityBill;
import com.backend.core.bills.water.WaterBills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface TelephoneBillsRepo extends JpaRepository<TelephoneBills, String> {
        TelephoneBills findBybillId(String billId);
        List<TelephoneBills> findByPeriod(String period);

        @Query("select c from TelephoneBills c where c.period like %?1")
        List<TelephoneBills> findByPeriodEndsWith(String chars);

        @Query("select c from TelephoneBills c where c.period like ?1%")
        List<TelephoneBills> findByPeriodStartsWith(String chars);

        List<TelephoneBills> findByCertification(String status);

        @Query("select distinct c.period from TelephoneBills c where c.period like %?1")
        List<String> findDistinctFirstByPeriodEndingWith(String month);

        @Query("select distinct c.location from TelephoneBills c")
        List<String> findDistinctByLocation();

        @Query("select c from TelephoneBills c where c.location like ?1 and c.period like ?2%")
        List<TelephoneBills> findByLocationAndPeriodStartingWith(String location, String year);

        @Query("select c from TelephoneBills c where c.location like ?1 and c.period like %?2")
        List<TelephoneBills> findByLocationAndPeriodEndingWith(String location, String month);
}
