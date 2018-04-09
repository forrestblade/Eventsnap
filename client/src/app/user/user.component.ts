import { Users } from '../users';
import { EventService } from '../event.service';

import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-user',
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


 users: Array<Users>

 getUsers() {
   this.eventService.getUsers()
   .subscribe(data => this.users = data);
 }

<<<<<<< HEAD
  
=======
 
>>>>>>> master

 

 constructor(private eventService: EventService) { }

 ngOnInit() {
   this.getUsers();
 }

}