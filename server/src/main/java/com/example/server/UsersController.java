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
	
	@GetMapping("/users")
	public List<Users> getUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/users")
	public ResponseEntity<Users> addUser(@RequestBody Users users){
		Users addedUser = userRepository.save(users);
		return ResponseEntity.ok(addedUser);
	}

}
