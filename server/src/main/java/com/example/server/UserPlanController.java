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
public class UserPlanController {
	
	@Autowired
	private UserPlanRepository userPlanRepository;
	
	@GetMapping("/userplan")
	public List<UserPlan> getUserPlan(){
		return userPlanRepository.findAll();
	}
	
	@PostMapping("/userplan")
	public ResponseEntity<UserPlan> addUserPlan(@RequestBody UserPlan userPlan) {
		UserPlan addedUserPlan = userPlanRepository.save(userPlan);
		return ResponseEntity.ok(addedUserPlan);
	}

}
