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


}
