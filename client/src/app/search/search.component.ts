import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Events } from '../events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    '4am-12pm',
    '12pm-4pm',
    '4pm-11pm',
    '11pm-3am'
   ];

   step = 0;
   event: Array<Events>
   model: any = {};

   loading = false;
   
   addEvent(event: Events){
     console.log(event)
     this.eventService.addEvent(event).subscribe();
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
