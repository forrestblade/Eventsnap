package com.example.server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsTagsRepository extends JpaRepository<EventsTags, Long> {




}
