package com.backend.core.bills.houserent;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseRentRepo extends JpaRepository<HouseRent, String> {
        HouseRent findByvoucherNo(int voucherNo);
        HouseRent findByperiod(String period);
}
