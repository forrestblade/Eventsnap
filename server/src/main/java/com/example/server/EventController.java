package com.example.server;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventController {
	
	@Autowired
	private EventRepository eventRepository;
	
	@GetMapping("/event")
	public List<Event> getEvents(){
		return eventRepository.findAll();
	}
	
	@PostMapping("/event")
	public ResponseEntity<Event> addEvent(@RequestBody Event event){
		Event addedEvent = eventRepository.save(event);
		return ResponseEntity.ok(addedEvent);
	}



}
