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
public class UsersController {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BudgetRepository budgetRepository;
	
	@GetMapping("/users")
	public List<Users> getUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/users/{id}")
	public Optional<Users> getUsersById(@PathVariable(value = "id") Long id) {
		return userRepository.findById(id);		
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<Users> updateUsers(@PathVariable(value = "id") Long id, @Valid @RequestBody Users users) {
		Optional<Users> user = userRepository.findById(id);
		if(!user.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		Users updatedUser = userRepository.save(users);
		
		return ResponseEntity.ok(updatedUser);

	}
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Users> deleteUsers(@PathVariable(value = "id") Long id, @Valid @RequestBody Users users) {
		Optional<Users> user = userRepository.findById(id);
		if(!user.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		userRepository.delete(users);
		
		return ResponseEntity.ok().build();

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
