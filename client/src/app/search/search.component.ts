import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { UserPlan } from '../userplan';
import { Events } from '../events';
import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public eventService: EventService) {}

  buttonName: String = "Map View"

  userPlan: Array<UserPlan>
  model: any = {};
  loading = false;
  public someRange: number[] = [3, 7];
  public tooltipSlider = document.getElementById('slider-tooltips')
  public sliderTime_min;
  public sliderTime_max;
  public show:boolean = false;


  events: Array<Events>


  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
   
  }

  addEvent(events: Events){
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(data => this.events = data);
  }



  convertToTimeMin(someRange){
    if (someRange[0] == 0 || someRange[0] == 24){
      this.sliderTime_min = "12:00 AM";
    } else if (someRange[0] == 12) {
      this.sliderTime_min = "12:00 PM"
    } else if (someRange[0] == 12.5) {
      this.sliderTime_min = "12:30 PM"
    } else if (someRange[0] == 0.5) {
      this.sliderTime_min = "12:30 AM"
    } else if ((someRange[0] < 13) && (someRange[0] % 1 == 0)) {
      this.sliderTime_min = (someRange[0] +":00 AM");
    } else if (someRange[0] < 13) {
      this.sliderTime_min = ((someRange[0] - 0.5) +":30 AM");
    } else if ((someRange[0] >= 13) && (someRange[0] % 1 == 0)) {
      this.sliderTime_min = ((someRange[0] - 12) + ":00 PM");
    } else if (someRange[0] >= 13) {
      this.sliderTime_min = ((someRange[0] - 12.5) + ":30 PM");
    } 
    return this.sliderTime_min;
    
  }

  convertToTimeMax(someRange){
    if (someRange[1] == 0 || someRange[1] == 24){
      this.sliderTime_max = "12:00 AM";
    } else if (someRange[1] == 0.5) {
      this.sliderTime_max = "12:30 AM"
    } else if (someRange[1] == 12) {
      this.sliderTime_max = "12:00 PM"
    } else if (someRange[1] == 12.5) {
      this.sliderTime_max = "12:30 PM"
    } else if ((someRange[1] < 13) && (someRange[1] % 1 == 0)) {
      this.sliderTime_max = (someRange[1] +":00 AM");
    } else if (someRange[1] < 13) {
      this.sliderTime_max = ((someRange[1] - 0.5) +":30 AM");
    } else if ((someRange[1] >= 13) && (someRange[1] % 1 == 0)) {
      this.sliderTime_max = ((someRange[1] - 12) + ":00 PM");
    } else if (someRange[1] >= 13) {
      this.sliderTime_max = ((someRange[1] - 12.5) + ":30 PM");
    } 
    return this.sliderTime_max;
  }

  


    addUserPlan(userPlan: UserPlan){
      console.log(userPlan)
      this.eventService.addUserPlan(userPlan).subscribe();
    }
  
    getUserPlan() {
      this.eventService.getUserPlan()
      .subscribe(data => this.userPlan = data);
    }

    // setStartTime(sliderTime_min) {
    //   this.model.start_time = moment(this.sliderTime_min, ["hh:mm a"]).format("HH:mm:ss");
    // }
    
    // setEndTime(sliderTime_max) {
    //   this.model.end_time = moment(this.sliderTime_max, ["hh:mm a"]).format("HH:mm:ss");
    // }

    onSubmit() {
      this.loading = true;
      this.model.end_time = moment(this.sliderTime_max, ["hh:mm a"]).format("HH:mm:ss");
      this.model.start_time = moment(this.sliderTime_min, ["hh:mm a"]).format("HH:mm:ss");        
      
      
    }
    
    
    
  

  ngOnInit() {
      this.getUserPlan();
      this.getEvents();
  }

}