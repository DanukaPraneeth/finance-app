package com.backend.core.bills.advancepayevent;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvancePayEventRepo extends JpaRepository<AdvancePayEvent, String> {
        AdvancePayEvent findByrecId(int recId);
        AdvancePayEvent findByrecName(String recName);
}
