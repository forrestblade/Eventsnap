package com.example.server;

import java.sql.Time;
import java.util.Date;

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
public class Events {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Date date;
<<<<<<< HEAD
	private Date time;
=======
	private Time time;
	private Long businessesId;
>>>>>>> master
	private Long price;
	private Long location_id;
	
	

	public Long getLocation_id() {
		return location_id;
	}

	public void setLocation_id(Long location_id) {
		this.location_id = location_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public Long getId() {
		return id;
	}

	public Long getBusinessesId() {
		return businessesId;
	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public void setBusinessesId(Long businessesId) {
		this.businessesId = businessesId;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}



}
