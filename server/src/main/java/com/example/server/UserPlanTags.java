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
public class UserPlanTags {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long userplan_id;
	private Long tags_id;
	
	public Long getUserplan_id() {
		return userplan_id;
	}
	public void setUserplan_id(Long userplan_id) {
		this.userplan_id = userplan_id;
	}
	public Long getTags_id() {
		return tags_id;
	}
	public void setTags_id(Long tags_id) {
		this.tags_id = tags_id;
	}
	public Long getId() {
		return id;
	}
}
