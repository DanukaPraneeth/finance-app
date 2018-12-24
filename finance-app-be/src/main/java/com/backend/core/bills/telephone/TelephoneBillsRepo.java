package com.backend.core.bills.telephone;

import com.backend.core.bills.electricity.ElectricityBill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface TelephoneBillsRepo extends JpaRepository<TelephoneBills, String> {
        TelephoneBills findBybillId(String billId);
        List<TelephoneBills> findByPeriod(String period);

        @Query("select c from TelephoneBills c where c.period like %?1")
        List<TelephoneBills> findByNameEndsWith(String chars);

        @Query("select c from TelephoneBills c where c.period like ?1%")
        List<TelephoneBills> findByNameStartsWith(String chars);

        List<TelephoneBills> findByCertification(String status);


}
