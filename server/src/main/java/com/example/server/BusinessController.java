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
public class BusinessController {
	
	@Autowired
	private BusinessRepository businessRepository;
	
	@GetMapping("/business")
	public List<Business> getBusinesses(){
		return businessRepository.findAll();
	}
	
	@PostMapping("/business")
	public ResponseEntity<Business> addBusiness(@RequestBody Business business){
		Business addedBusiness = businessRepository.save(business);
		return ResponseEntity.ok(addedBusiness);
	}


}
