package com.backend.core.bills.advancesettleevent;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvanceSettleEventRepo extends JpaRepository<AdvanceSettleEvent, String> {
        AdvanceSettleEvent findBysettlementNo(int settlementNo);
}
