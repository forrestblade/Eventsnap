import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { UserPlan } from '../userplan';
import * as moment from 'moment';
import { UserPlanTags } from '../UserPlantags';


@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

    constructor(public eventService: EventService) {}

    userPlan: Array<UserPlan>
    userPlanTags: Array<UserPlanTags>
    model: any = {};
    loading = false;
    public someRange: number[] = [3, 7];
    public tooltipSlider = document.getElementById('slider-tooltips')
    public sliderTime_min;
    public sliderTime_max;
    public music;
    public food;
    public drink;
   


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

  

      onSubmit() {
        this.loading = true;
        this.model.end_time = moment(this.sliderTime_max, ["hh:mm a"]).format("HH:mm:ss");
        this.model.start_time = moment(this.sliderTime_min, ["hh:mm a"]).format("HH:mm:ss");        
        this.eventService.addUserPlan(this.model).subscribe();
        
      }
      
      
      
    

    ngOnInit() {
        this.getUserPlan();
    }

}