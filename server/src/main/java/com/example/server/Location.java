package com.example.server;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Location {

	@Id
	private Long id;
	private String city;
	private String state;
	private int zipCode;

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZipCode() {
		return zipCode;
	}

	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}

	public Long getId() {
		return id;
	}

}
