import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Events } from '../events';
import { EventsTags } from '../eventsTags';
import { EventService } from '../event.service';
import { getHostElement } from '@angular/core/src/render3';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: `./admin.component.html`,
  styles: [`.shadow-sm {box-shadow:0px 0px 2px 1px rgba( 0, 0, 0, 0.2 )}
  .bg-ez-light-black { background-color: rgba(46,50,56,1)}
  .bg-ez-dark-black { background-color: rgba(33,35,39,1)}
  h1{ max-width: 100px; min-width:100px;}`]
})
export class AdminComponent implements OnInit {

  profile: any;
  events: Array<Events>
  eventsTags: Array<EventsTags>;

  constructor(private auth: AuthService, private eventService: EventService) { }

  addEvent(events: Events) {
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(data => this.events = data);
  }

 deleteEvent(events: Events): void{
   console.log(this.events)
    this.eventService.deleteEvent(events).subscribe(()=> {
      this.getEvents();
    });
 }

  ngOnInit() {
    this.getEvents();
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
  }

  }
}
