import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { UserPlan } from '../userplan';
import * as moment from 'moment';
import { UserPlanTags } from '../UserPlantags';
import { Tags } from '../tags';
import { Events } from '../events';


@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

    constructor(public eventService: EventService) {}

    userPlan: Array<UserPlan>;
    events: Array<Events>;
    userPlanTags: Array<UserPlanTags>;
    tags: Array<Tags>;
    
    model: any = {};
    loading = false;
    public someRange: number[] = [3, 7];
    public tooltipSlider = document.getElementById('slider-tooltips')
    public sliderTime_min;
    public sliderTime_max;
    eventPlan: Array<Events>;
   


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

      getEvents() {
        this.eventService.getEvents()
        .subscribe(data => this.events = data);
      }

      getCheckedTags() {
        let checkedTags = [];
        checkedTags = this.tags.filter(tags => tags.checked).map(tags => tags.id);
        return checkedTags;
      }
    
  
      getTags() {
        this.eventService.getTags()
          .subscribe(data => this.tags = data);
      }
      

      // this.eventService.getUserPlan()
      createEventPlan() {
        var eventPlan1 = [];
       Object.entries(this.events).map(([event, val])=>{
        //  console.log(val.price)
         if (val.price <= this.model.budget) {
           eventPlan1.push(val);
           
            // console.log(eventPlan[Object.keys(eventPlan)[0]][0]);
         }
       })
        this.eventPlan = eventPlan1[0];
       console.log(this.eventPlan)
      }
      
    

      onSubmit() {
        this.loading = true;
        this.model.userplantags = this.getCheckedTags();
        this.model.end_time = moment(this.sliderTime_max, ["hh:mm a"]).format("HH:mm:ss");
        this.model.start_time = moment(this.sliderTime_min, ["hh:mm a"]).format("HH:mm:ss");        
        this.eventService.addUserPlan(this.model).subscribe();
        this.getUserPlan();
        this.createEventPlan();
        
      }

    
    
      
      
      
    

    ngOnInit() {
      this.getTags();
      this.getUserPlan();
      this.getEvents();
    }

}