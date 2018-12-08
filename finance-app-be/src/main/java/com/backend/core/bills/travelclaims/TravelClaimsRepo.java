package com.backend.core.bills.travelclaims;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelClaimsRepo extends JpaRepository<TravelClaims, String> {
        TravelClaims findBybillId(int billId);
        TravelClaims findByname(String name);
        TravelClaims findByclaimerId(String claimerId);
}
