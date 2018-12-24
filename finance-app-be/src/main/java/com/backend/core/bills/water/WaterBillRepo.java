package com.backend.core.bills.water;

import com.backend.core.bills.telephone.TelephoneBills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WaterBillRepo extends JpaRepository<WaterBills, Integer> {
    WaterBills findBybillNo(String billNo);
    List<WaterBills> findByPeriod(String month);

    @Query("select c from WaterBills c where c.period like %?1")
    List<WaterBills> findByNameEndsWith(String chars);

    @Query("select c from WaterBills c where c.period like ?1%")
    List<WaterBills> findByNameStartsWith(String chars);

    List<WaterBills> findByCertification(String status);


}
