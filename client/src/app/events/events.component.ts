import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Events } from '../events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  events: Array<Events>
  model: any = {};
  loading = false;

 


  addEvent(events: Events){
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(data => this.events = data);
  }

  onSubmit() {
    this.loading = true;
    this.eventService.addEvent(this.model).subscribe();
    
  }

  
  ngOnInit() {
    this.getEvents();
  }

}
