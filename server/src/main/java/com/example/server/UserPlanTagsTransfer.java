package com.example.server;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.BeansException;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property="id")

public class UserPlanTagsTransfer extends UserPlan{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long budget;
	private Long location_id;
	private Long users_id;
	private Date date;
	private Date start_time;
	private Date end_time;
	private ArrayList<Long> userplantags;
	
	public static void copyProperties(com.example.server.UserPlanTagsTransfer source,
			com.example.server.UserPlan target) 
     throws BeansException {
	}
	public static void copyProperties(com.example.server.UserPlanTagsTransfer source,
			com.example.server.UserPlanTags target) 
     throws BeansException {
	}
	
	public Long getBudget() {
		return budget;
	}
	public void setBudget(Long budget) {
		this.budget = budget;
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
	public void setDate(Date date) {
		this.date = date;
	}
	public Date getStart_time() {
		return start_time;
	}
	public void setStart_time(Date start_time) {
		this.start_time = start_time;
	}
	public Date getEnd_time() {
		return end_time;
	}
	public void setEnd_time(Date end_time) {
		this.end_time = end_time;
	}
	public ArrayList<Long> getUserplantags() {
		return userplantags;
	}
	public void setUserplantags(ArrayList<Long> userplantags) {
		this.userplantags = userplantags;
	}
	public Long getId() {
		return id;
	}
	
	
}
