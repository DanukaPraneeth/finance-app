package com.backend.core.bills.homeallowance;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeAllowanceRepo extends JpaRepository<HomeAllowance, String> {
        HomeAllowance findByempId(int empId);
        HomeAllowance findByempName(String empName);
}
