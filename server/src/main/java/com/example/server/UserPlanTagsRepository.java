package com.example.server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPlanTagsRepository extends JpaRepository<UserPlanTags, Long> {

}
