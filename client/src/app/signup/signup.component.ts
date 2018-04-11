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
  model: any = {};
    loading = false;
  addUser(user: Users){
    console.log(user)
    this.eventService.addUsers(user).subscribe();
  }

  submitted = false;

onSubmit() {
  this.loading = true;
this.eventService.addUsers(this.model)}

  ngOnInit() {
  }

}
