package com.backend.core.bills.examinationclaims;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExaminationClaimsRepo extends JpaRepository<ExaminationClaims, String> {
        ExaminationClaims findByexamClaimId(long examClaimId);
        ExaminationClaims findBylectureId(String lectureId);
}
