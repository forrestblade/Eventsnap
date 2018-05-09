package com.example.server;

import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.springframework.beans.BeansException;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.mysql.fabric.xmlrpc.base.Array;


@Entity
@JsonIdentityInfo(
		generator = ObjectIdGenerators.PropertyGenerator.class,
		property="id")
@Table(name="events")
//@SecondaryTable(name="events_tags", pkJoinColumns= {@PrimaryKeyJoinColumn(name="events_tags"))
public class EventsTagsTransfer extends Events {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Date date;
	private Date start_time;
	private Date end_time;
	private Long price;
	private String city;
	private String state;
	private String address;
	private String zip_code;
	private float lat;
	private float lng;
	private ArrayList<Long> eventstags;
	@Column(columnDefinition="TEXT")
	private String description;
	
	
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

	public String getZip_code() {
		return zip_code;
	}

	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}

	public float getLat() {
		return lat;
	}

	public void setLat(float lat) {
		this.lat = lat;
	}

	public float getLng() {
		return lng;
	}

	public void setLng(float lng) {
		this.lng = lng;
	}

	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public static void copyProperties(com.example.server.EventsTagsTransfer source,
			com.example.server.Events target) 
     throws BeansException {
	}
	
	public static void copyProperties(com.example.server.EventsTagsTransfer source,
			com.example.server.EventsTags target) 
     throws BeansException {
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
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


	public Long getPrice() {
		return price;
	}


	public void setPrice(Long price) {
		this.price = price;
	}

	public ArrayList<Long> getEventstags() {
		return eventstags;
	}

	public void setEventstags(ArrayList<Long> eventstags) {
		this.eventstags = eventstags;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}




//
//	public Array[] setEventstags(Array[] eventstags, Long id) {
//		for (int i=0; i <= eventstags.length; i++) {
//			i++;
//		}
//		return this.eventstags = setEventstags(eventstags, id);
//	}
//	
//	
//	
}
