package com.example.server;

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
public class BusinessesController {
	
	@Autowired
	private BusinessesRepository businessesRepository;
	
	@GetMapping("/businesses")
	public List<Businesses> getBusinesses(){
		return businessesRepository.findAll();
	}
	
	@PostMapping("/businesses")
	public ResponseEntity<Businesses> addBusiness(@RequestBody Businesses business){
		Businesses addedBusiness = businessesRepository.save(business);
		return ResponseEntity.ok(addedBusiness);
			}
	
	@GetMapping("/businesses/{id}")
	public Optional<Businesses> getBusinessesById(@PathVariable(value = "id") Long id) {
		return businessesRepository.findById(id);		
	}
	@PutMapping("/businesses/{id}")
	public ResponseEntity<Businesses> updateBusinesses(@PathVariable(value = "id") Long id, @Valid @RequestBody Businesses business) {
		Optional<Businesses> businesses = businessesRepository.findById(id);
		if(!businesses.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Businesses updatedBusinesses = businessesRepository.save(business);
		
		return ResponseEntity.ok(updatedBusinesses);

	}
	
	@DeleteMapping("/businesses/{id}")
	public ResponseEntity<Businesses> deleteBusiness(@PathVariable(value = "id") Long id, @Valid @RequestBody Businesses business) {
		Optional<Businesses> businesses = businessesRepository.findById(id);
		if(!businesses.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		businessesRepository.delete(business);
		
		return ResponseEntity.ok().build();
		
	}





}
