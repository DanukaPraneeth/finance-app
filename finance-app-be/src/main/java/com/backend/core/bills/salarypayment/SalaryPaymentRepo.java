package com.backend.core.bills.salarypayment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaryPaymentRepo extends JpaRepository<SalaryPayment, String> {
        SalaryPayment findBypaymentId(int paymentId);
        SalaryPayment findBypaymentType(String paymentType);
}
