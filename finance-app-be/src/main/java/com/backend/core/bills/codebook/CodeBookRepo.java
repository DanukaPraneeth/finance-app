package com.backend.core.bills.codebook;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CodeBookRepo extends JpaRepository<CodeBook, String> {
        CodeBook findBydescId(int descId);
        CodeBook findByfaculty(String faculty);
}
