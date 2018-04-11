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

 //get Users retrieves from database using service
 getUsers() {
   this.eventService.getUsers()
   .subscribe(data => this.users = data);
 }



  

 

 constructor(private eventService: EventService) { }

 //Get users function runs as the page loads
 ngOnInit() {
   this.getUsers();
 }

}