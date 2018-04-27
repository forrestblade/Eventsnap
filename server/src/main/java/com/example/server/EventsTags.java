package com.example.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property="id")
public class EventsTags {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long eventsid;
	private Long tagsid;
	
	
	public Long getEventsid() {
		return eventsid;
	}
	public void setEvents_id(Long events_id) {
		this.eventsid = events_id;
	}
	public Long getTags_id() {
		return tagsid;
	}
	public void setTags_id(Long tags_id) {
		this.tagsid = tags_id;
	}
	public Long getId() {
		return id;
	}
	
}
