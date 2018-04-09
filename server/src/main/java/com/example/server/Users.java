package com.example.server;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Users {

	@Id
	private Long id;
	private String username;
	private String password;
	private String email_address;
	private Long budget_id;
	private Long location_id;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail_address() {
		return email_address;
	}

	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}

	public Long getId() {
		return id;
	}

	public Long getLocation_id() {
		return location_id;
	}

	public void setLocation_id(Long location_id) {
		this.location_id = location_id;
	}

	public void setBudget_id(Long budget_id) {
		this.budget_id = budget_id;
	}

	public Long getBudget_id() {
		return budget_id;
	}

}
