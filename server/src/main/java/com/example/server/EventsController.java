package com.example.server;

import java.sql.Array;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	@Autowired
	private EventsTagsRepository eventsTagsRepository;
	
	@PostMapping("/location")
	public ResponseEntity<Location> addLocation(@RequestBody Location location){
		Location addedLocation = locationRepository.save(location);
		return ResponseEntity.ok(addedLocation);
	}
	@PostMapping("/tags")
	public ResponseEntity<Tags> addTags(@RequestBody Tags tags){
		Tags addedTags = tagsRepository.save(tags);
		return ResponseEntity.ok(addedTags);
	}
	
	
	@PostMapping("/eventstagstransfer")
	public ResponseEntity<EventsTagsTransfer> addEventstagstransfer(@RequestBody Events events, EventsTags eventstags){
		Events addedEvent = eventsRepository.save(events);
		for (int i=0; i <= this.EventsTagsTransfer.getEventstags().length; i++) {
			EventsTags newtag = new EventsTags();
			newtag.setTagsId(EventsTagsTransfer.getEventstags()[i]);
			newtag.setEventsId(EventsTagsTransfer.getId()); 
			System.out.println(getEventstags()[i]);
		}
		EventsTags addedEventstags = eventsTagsRepository.save(eventstags);
//		return this.eventstags = setEventstags(eventstags, id);
		return ResponseEntity.ok(addedEvent);
	
	}
	

	@PostMapping("/eventstagstransfer/{eventstags[]}")
	public ResponseEntity<EventsTags> addEventstagstransfer(@RequestBody EventsTags eventstags){
		EventsTags addedEventsTags = eventsTagsRepository.save(eventstags);
		return ResponseEntity.ok(addedEventsTags);
	}
	
	
//	@PostMapping("/eventstags")
//	public ResponseEntity<EventsTags> addEventstags(@RequestBody EventsTags eventsTags){
//		EventsTags addedEventsTags = eventsTagsRepository.save(eventsTags);
//		return ResponseEntity.ok(addedEventsTags);
//	}
	
	@DeleteMapping("/events/{id}")
	public ResponseEntity<Events> deleteEvents(@PathVariable(value = "id") Long id, @Valid @RequestBody Events events) {
		Optional<Events> event = eventsRepository.findById(id);
		if(!event.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		eventsRepository.delete(events);
		
		return ResponseEntity.ok().build();

	}

	@PostMapping("/events")
	public ResponseEntity<Events> addEvent(@RequestBody Events events){
		
		Events addedEvent = eventsRepository.save(events);
		return ResponseEntity.ok(addedEvent);
	}
//	@GetMapping("/tags")
//	public List<Tags> getTags(){
//		return tagsRepository.findAll();
//	}
//	@GetMapping("/tags/{id}")
//	public Optional<Tags> getTagsById(@PathVariable(value = "id") Long id) {
//		return tagsRepository.findById(id);		
//	}
//	@PutMapping("/tags/{id}")
//	public ResponseEntity<Tags> updateTags(@PathVariable(value = "id") Long id, @Valid @RequestBody Tags tags) {
//		Optional<Tags> tag = tagsRepository.findById(id);
//		if(!tag.isPresent()) {
//			return ResponseEntity.notFound().build();
//		}
//		locationRepository.delete(location);
//		
//		return ResponseEntity.ok().build();

//	}
	@DeleteMapping("/tags/{id}")
	public ResponseEntity<Events> deleteTags(@PathVariable(value = "id") Long id, @Valid @RequestBody Tags tags) {
		Optional<Tags> tag = tagsRepository.findById(id);
		if(!tag.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		tagsRepository.delete(tags);
		
		return ResponseEntity.ok().build();

	}
	@GetMapping("/events")
	public List<Events> getEvents(){
		return eventsRepository.findAll();
	}
	@GetMapping("/events/{id}")
	public Optional<Events> getEventsById(@PathVariable(value = "id") Long id) {
		return eventsRepository.findById(id);		
	}
	
	@GetMapping("/location")
	public List<Location> getLocation(){
		return locationRepository.findAll();
	}
	@GetMapping("/location/{id}")
	public Optional<Location> getLocationById(@PathVariable(value = "id") Long id) {
		return locationRepository.findById(id);		
	}
	@GetMapping("/eventstags")
	public List<EventsTags> getEventstags(){
		return eventsTagsRepository.findAll();
	}

	@GetMapping("/tags")
	public List<Tags> getTags(){
		return tagsRepository.findAll();
	}
	@GetMapping("/tags/{id}")
	public Optional<Tags> getTagsById(@PathVariable(value = "id") Long id) {
		return tagsRepository.findById(id);		
	}
	@PutMapping("/events/{id}")
	public ResponseEntity<Events> updateEvents(@PathVariable(value = "id") Long id, @Valid @RequestBody Events events) {
		Optional<Events> event = eventsRepository.findById(id);
		if(!event.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Events updatedUser = eventsRepository.save(events);
		
		return ResponseEntity.ok(updatedUser);

	}
	
	@PutMapping("/location/{id}")
	public ResponseEntity<Location> updateLocation(@PathVariable(value = "id") Long id, @Valid @RequestBody Location location) {
		Optional<Location> locations = locationRepository.findById(id);
		if(!locations.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Location updatedLocation = locationRepository.save(location);
		
		return ResponseEntity.ok(updatedLocation);

	}

	


	@PutMapping("/tags/{id}")
	public ResponseEntity<Tags> updateTags(@PathVariable(value = "id") Long id, @Valid @RequestBody Tags tags) {
		Optional<Tags> tag = tagsRepository.findById(id);
		if(!tag.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Tags updatedTag = tagsRepository.save(tags);
		
		return ResponseEntity.ok(updatedTag);

	}


}
