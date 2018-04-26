import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Events } from '../events';
import * as moment from 'moment';
import { Tags } from '../tags';
import { EventsTags } from '../eventsTags';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  
  constructor(private eventService: EventService) { }

  events: Array<Events>;
  tags: Array<Tags>;
  eventsTags: Array<EventsTags>;
  model: any = {};
  loading = false;


  
  addEvent(events: Events){
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getCheckedTags() {
    let checkedTags = [];
    checkedTags = this.tags.filter(tags => tags.checked).map(tags => tags.id);
    return checkedTags;
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
    this.model.eventstags = this.getCheckedTags();
    this.model.start_time= moment(this.model.start_time, ["hh:mm a"]).format("HH:mm:ss")
    this.model.end_time= moment(this.model.end_time, ["hh:mm a"]).format("HH:mm:ss")
    this.eventService.addEvent(this.model).subscribe();
  
    
  }

  
  ngOnInit() {
    this.getEvents();
    this.getTags();
  }

}
