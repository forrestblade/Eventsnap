package com.example.server;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Budget {
	
	@Id
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
