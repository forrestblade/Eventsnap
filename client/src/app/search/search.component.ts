import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Events } from '../events';
import { EventService } from '../event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // constructor(private eventService: EventService) {}

  myControl: FormControl = new FormControl();

  options = [
    '4am-12pm',
    '12pm-4pm',
    '4pm-11pm',
    '11pm-3am'
   ];

   step = 0;
   events: Array<Events>
   model: any = {};

   loading = false;
   
   addEvent(events: Events){
     console.log(events)
    //  this.eventService.addEvent(event).subscribe();
   }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
