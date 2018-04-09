import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private eventService: EventService) { }
  
  addUser(user: Users){
    console.log(user)
    this.eventService.addUsers(user).subscribe();
  }
  ngOnInit() {
  }

}
