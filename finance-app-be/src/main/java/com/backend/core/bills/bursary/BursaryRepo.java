package com.backend.core.bills.bursary;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BursaryRepo extends JpaRepository<Bursary, String> {
        Bursary findBypaymentId(long paymentId);
        Bursary findBymonth(String month);
}
