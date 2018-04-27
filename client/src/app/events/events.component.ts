import { EventService } from '../event.service';
import { Events } from '../events';
import * as moment from 'moment';
import { Tags } from '../tags';
import { EventsTags } from '../eventsTags';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Locations } from "../location";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public placeResult: Locations;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private eventService: EventService
  ) {}

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
    // this.eventService.addLocation().subscribe();
    this.eventService.addLocation(this.placeResult).subscribe();
    
  }

  loadAuto(){
 //create search FormControl
 this.searchControl = new FormControl();
  
 //load Places Autocomplete
 this.mapsAPILoader.load().then(() => {
   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
     types: ["address"]
   });
   autocomplete.addListener("place_changed", () => {
     this.ngZone.run(() => {
       //get the place result
       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

       console.log(place)

       let eventLoc = {
         city: place.address_components[2].long_name,
         state:place.address_components[4].short_name,
         
         address:place.address_components[0].long_name + " " + place.address_components[1].long_name,
         zip_code:place.address_components[6].long_name
       }
       console.log(eventLoc)
       this.placeResult = eventLoc;
       
     });
   });
 });
  }


  
  ngOnInit() {
    this.getEvents();
    this.getTags();
    this.loadAuto();
   
  }
  

}


@NgModule({
  imports: [ 
    AgmCoreModule.forRoot({
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ EventsComponent ],
  bootstrap: [ EventsComponent ]
})
export class AppModule {}
