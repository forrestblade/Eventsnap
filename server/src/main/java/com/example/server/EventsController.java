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
	@Autowired
	private TagsRepository tagsRepository;
	@Autowired
	private LocationRepository locationRepository;
	
	@GetMapping("/events")
	public List<Events> getEvents(){
		return eventsRepository.findAll();
	}
	
	@GetMapping("/tags")
	public List<Tags> getTags(){
		return tagsRepository.findAll();
	}
	
	@GetMapping("/location")
	public List<Location> getLocation(){
		return locationRepository.findAll();
	}
	
	@PostMapping("/events")
	public ResponseEntity<Events> addEvent(@RequestBody Events events){
		Events addedEvent = eventsRepository.save(events);
		return ResponseEntity.ok(addedEvent);
	}
	
	@PostMapping("/tags")
	public ResponseEntity<Tags> addTags(@RequestBody Tags tags){
		Tags addedTags = tagsRepository.save(tags);
		return ResponseEntity.ok(addedTags);
	}

	@PostMapping("/location")
	public ResponseEntity<Location> addLocation(@RequestBody Location location){
		Location addedLocation = locationRepository.save(location);
		return ResponseEntity.ok(addedLocation);
	}


}
