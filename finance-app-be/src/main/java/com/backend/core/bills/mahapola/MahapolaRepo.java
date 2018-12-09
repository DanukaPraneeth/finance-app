package com.backend.core.bills.mahapola;

import org.springframework.data.jpa.repository.JpaRepository;

interface MahapolaRepo extends JpaRepository<Mahapola, String> {
        Mahapola findBypaymentId(int paymentId);
        Mahapola findBymonth(String month);
}
