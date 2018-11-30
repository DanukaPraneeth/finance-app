package com.backend.core.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StaffRepo extends JpaRepository<Staff, Integer> {
    List<Staff> findByUserName(String userName);
    Staff findPasswordByUserName(String userName);
    Staff findTopByOrderByUserKeyDesc();
}