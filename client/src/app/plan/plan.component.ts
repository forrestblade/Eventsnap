import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { UserPlan } from '../userplan';
import * as moment from 'moment-timezone';
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
    public dateEvent1;
    public startTimeEvent1;
    public endTimeEvent1;
    public dateEvent2;
    public startTimeEvent2;
    public endTimeEvent2;
    eventPlan1: Array<Events>;
    eventPlan2: Array<Events>;
    eventPlan3: Array<Events>;


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
      createEventPlan1() {
        var eventPlan0 = [];
        var eventPlan00  = [];
        var eventPlan000 = [];
       Object.entries(this.events).map(([event, val])=>{
      
        var startTimePhx = moment.tz(val.start_time.toString(), "America/Phoenix").format();
 
        var formattedTime = this.model.date + "T07:00:00.000+0000T" + startTimePhx;
        var stringEventTime =(val.date+"T"+ startTimePhx.toString());
         if (((val.price <= this.model.budget )) && (stringEventTime == formattedTime)) {
           eventPlan0.push(val);
           console.log(stringEventTime)
           console.log(formattedTime)
           console.log(eventPlan0);
            // console.log(eventPlan[Object.keys(eventPlan)[0]][0]);
         }
       })
        this.eventPlan1 = eventPlan0[0];
        //bound by scope... iterating through first event array to access variables and storing them.
        for (var j=0; j <= eventPlan0.length; j++) {
           console.log(eventPlan0[j].date);
           this.dateEvent1 = eventPlan0[j].date;
           this.startTimeEvent1 = eventPlan0[j].start_time;
           this.endTimeEvent1 = eventPlan0[j].end_time;
           console.log(this.dateEvent1);
           //2020-10-20T07:00:00.000+0000
           console.log(this.startTimeEvent1);
           //1970-01-01T13:30:00.000+0000 no moment
           console.log(this.endTimeEvent1);
           //1970-01-02T01:30:00.000+0000 no moment
 
          //iterating through events
           for (var i in this.events) {
            console.log(this.events[i].date)
            //2020-10-20T07:00:00.000+0000
            console.log(this.events[i].start_time)
            //1970-01-01T13:30:00.000+0000
            console.log(this.events[i].end_time)
            //1970-01-02T01:30:00.000+0000
  
          var startTimePhx1 = moment.tz(this.events[i].start_time.toString(), "America/Phoenix").format();
          var endTimePhx1 = moment.tz(this.events[i].start_time.toString(), "America/Phoenix").format();
          
          //formating the date and times
          var formattedTime1 = this.dateEvent1.toString()  + this.endTimeEvent1.toString();
          var stringEventTime1 = (this.events[i].date.toString() + this.events[i].start_time.toString())
  
          console.log(formattedTime1);
          console.log(stringEventTime1);
          //comparing price, time, and date...
            if (( (this.events[i].price <= this.model.budget))&& (formattedTime1 == stringEventTime1 )) {
           
                    //consoling it out to keep track of values
                    console.log(this.events[i]);
                    eventPlan00.push(this.events[i]);
                    console.log(eventPlan00);
                    console.log(this.events[i].price);
                    console.log(eventPlan00[0].end_time)
                    console.log(this.events[i].start_time)
                    
                  }
                 this.eventPlan2 = eventPlan00[0];
                 console.log(eventPlan00[0]) 
                 console.log(this.eventPlan2)
           }}
          console.log(this.eventPlan2);
          //using previous event for event 3...
          for (var k=0; k <= eventPlan00.length; k++) {
            console.log(eventPlan0[k].date);
            this.dateEvent2 = eventPlan00[k].date;
            this.startTimeEvent2 = eventPlan00[k].start_time;
            this.endTimeEvent2 = eventPlan00[k].end_time;
            console.log(this.dateEvent2);
            //2020-10-20T07:00:00.000+0000
            console.log(this.startTimeEvent2);
            //1970-01-01T13:30:00.000+0000 no moment
            console.log(this.endTimeEvent2);
            //1970-01-02T01:30:00.000+0000 no moment
  
          
            for (var i in this.events) {
             console.log(this.events[i].date)
             //2020-10-20T07:00:00.000+0000
             console.log(this.events[i].start_time)
             //1970-01-01T13:30:00.000+0000
             console.log(this.events[i].end_time)
             //1970-01-02T01:30:00.000+0000
   
           var startTimePhx1 = moment.tz(this.events[i].start_time.toString(), "America/Phoenix").format();
           var endTimePhx1 = moment.tz(this.events[i].start_time.toString(), "America/Phoenix").format();
           // startTimePhx1.toString());
           var formattedTime2 = this.dateEvent2.toString()  + this.endTimeEvent2.toString();
           var stringEventTime2 = (this.events[i].date.toString() + this.events[i].start_time.toString())
   
           console.log(formattedTime2);
           console.log(stringEventTime2);
             if (( (this.events[i].price <= this.model.budget)) && (formattedTime2 == stringEventTime2 )) {
                     
                     console.log(this.events[i]);
                     eventPlan00.push(this.events[i]);
                     console.log(eventPlan000);
                     console.log(this.events[i].price);
                     console.log(eventPlan000[0].end_time)
                     console.log(this.events[i].start_time)
                   }
                  this.eventPlan3 = eventPlan000[0];
                  console.log(eventPlan000[0]) 
                  console.log(this.eventPlan3)
            }}
           console.log(this.eventPlan3);
        }



      onSubmit() {
        this.loading = true;
        this.model.userplantags = this.getCheckedTags();
        this.model.end_time = moment(this.sliderTime_max, ["hh:mm a"]).format("HH:mm:ss");
        this.model.start_time = moment(this.sliderTime_min, ["hh:mm a"]).format("HH:mm:ss");        
        this.eventService.addUserPlan(this.model).subscribe();
        this.getUserPlan();
        this.createEventPlan1();
        
        
        
      }

    
    
      
      
      
    

    ngOnInit() {
      this.getTags();
      this.getUserPlan();
      this.getEvents();
    }

}