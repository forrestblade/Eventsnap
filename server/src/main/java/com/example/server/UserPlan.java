package com.example.server;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserPlan {
	
	@Id
	private Long id;
	private Long budget_id;
	private Long location_id;
	private Long users_id;
	private Date date;
	private Time time;
	
	public Long getBudget_id() {
		return budget_id;
	}
	public void setBudget_id(Long budget_id) {
		this.budget_id = budget_id;
	}
	public Long getLocation_id() {
		return location_id;
	}
	public void setLocation_id(Long location_id) {
		this.location_id = location_id;
	}
	public Long getUsers_id() {
		return users_id; 
	}
	public void setUsers_id(Long users_id) {
		this.users_id = users_id;
	}
	public Date getDate() {
		return date;
	}
	
	//date has to be YYYY-MM-DD to post
	public void setDate(Date date) {
		this.date = date;
	}
	
	public Time getTime() {
		return time;
	}
	
	//time has to be HH:MM:SS to post
	public void setTime(Time time) {
		this.time = time;
	}
	
	public Long getId() {
		return id;
	}
	

}
