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
public class UsersController {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BudgetRepository budgetRepository;
	
	@GetMapping({"/users"})
	public List<Users> getUser(){
		return userRepository.findAll();
	}
	
	@GetMapping("/budget")
	public List<Budget> getBudget(){
		return budgetRepository.findAll();
	}
	
	@PostMapping("/users")
	public ResponseEntity<Users> addSeries(@RequestBody Users user){
		Users addedUser = userRepository.save(user);
		return ResponseEntity.ok(addedUser);
	}
	
	@PostMapping("/budget")
	public ResponseEntity<Budget> addBudget(@RequestBody Budget budget){
		Budget addedBudget = budgetRepository.save(budget);
		return ResponseEntity.ok(addedBudget);
	}

}
