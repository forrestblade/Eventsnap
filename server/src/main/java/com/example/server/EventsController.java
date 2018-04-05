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
public class EventsController {
	
	@Autowired
	private EventsRepository eventsRepository;
	
	@GetMapping("/events")
	public List<Events> getEvents(){
		return eventsRepository.findAll();
	}
	
	@PostMapping("/events")
	public ResponseEntity<Events> addEvent(@RequestBody Events events){
		Events addedEvent = eventsRepository.save(events);
		return ResponseEntity.ok(addedEvent);
	}



}
