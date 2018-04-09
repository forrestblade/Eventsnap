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
public class Budget {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int minval;
	private int maxval;
	
	public int getMinval() {
		return minval;
	}
	public void setMinval(int minval) {
		this.minval = minval;
	}
	public int getMaxval() {
		return maxval;
	}
	public void setMaxval(int maxval) {
		this.maxval = maxval;
	}
	public Long getId() {
		return id;
	}

}
