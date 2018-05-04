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
public class UserPlanController {
	
	@Autowired
	private TagsRepository tagsRepository;
	@Autowired
	private LocationRepository locationRepository;
	@Autowired
	private UserPlanRepository userPlanRepository;
	@Autowired
	private UserPlanTagsRepository userPlanTagsRepository;
	
	@GetMapping("/userplan")
	public List<UserPlan> getUserPlan(){
		return userPlanRepository.findAll();
	}
	
	@PostMapping("/userplan")
	public ResponseEntity<UserPlan> addUserPlan(@RequestBody UserPlan userPlan) {
		UserPlan addedUserPlan = userPlanRepository.save(userPlan);
		return ResponseEntity.ok(addedUserPlan);
	}
	
	@PostMapping("/userplantagstransfer")
	public ResponseEntity<UserPlanTagsTransfer> addUserPlanTagsTransfer(@RequestBody UserPlanTagsTransfer userplantagstransfer){
		UserPlanTagsTransfer addedUserPlanTagsTransfer = userPlanRepository.save(userplantagstransfer);
		UserPlan addedUserPlan = userPlanRepository.save(userplantagstransfer);
		for (long i: userplantagstransfer.getUserplantags()) {
			UserPlanTags newtag = new UserPlanTags();
			newtag.setTags_id(i);
			newtag.setUserplan_id(userplantagstransfer.getId()); 
			System.out.println(newtag.getTags_id());
			UserPlanTags addedUserPlanTags = userPlanTagsRepository.save(newtag);
		}
		return ResponseEntity.ok(addedUserPlanTagsTransfer);
	
	}
//	@GetMapping("/userplantags")
//	public List<UserPlanTags> getUserPlanTags(){
//		return userPlanTagsRepository.findAll();
//	}



	
//	@PostMapping("/userplantags")
//	public ResponseEntity<UserPlanTags> addUserPlanTags(@RequestBody Tags tags){
//		Tags addedTags = userPlanTagsRepository.save(userPlanTags);
//		return ResponseEntity.ok(addedUserPlanTags);
//	}


}
