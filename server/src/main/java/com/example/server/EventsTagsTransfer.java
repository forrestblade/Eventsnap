package com.example.server;

import java.util.ArrayList;
import java.util.Date;

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
	private ArrayList<Long> eventstags;
	

	
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
