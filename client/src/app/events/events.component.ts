import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Events } from '../events';
import * as moment from 'moment';
import { Tags } from '../tags';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  
  constructor(private eventService: EventService) { }

  events: Array<Events>;
  tags: Array<Tags>;
  model: any = {};
  loading = false;
  checked: boolean;
  eventstags: any;


  addEventsTags(tags: Events){
    if (this.checked == true) {
      this.model.eventstags.push(this.tags)
    }
  }
  
  addEvent(events: Events){
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(data => this.events = data);
  }

  getTags() {
    this.eventService.getTags()
    .subscribe(data => this.tags = data);
  }

  onSubmit() {
    this.loading = true;
    this.model.start_time= moment(this.model.start_time, ["hh:mm a"]).format("HH:mm:ss")
    this.eventService.addEvent(this.model).subscribe();
    
  }

  
  ngOnInit() {
    this.getEvents();
    this.getTags();
  }

}
