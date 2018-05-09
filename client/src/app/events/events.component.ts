import { EventService } from '../event.service';
import { Events } from '../events';
import * as moment from 'moment-timezone';
import { Tags } from '../tags';
import { EventsTags } from '../eventsTags';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
// import { Locations } from "../location";
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
  public placeResult: Events;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private eventService: EventService
  ) { }

  events: Array<Events>;
  tags: Array<Tags>;
  eventsTags: Array<EventsTags>;
  model: any = {};
  loading = false;

  addEvent(events: Events) {
    console.log(events)
    this.eventService.addEvent(events).subscribe();
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

  onSubmit() {
    this.loading = true;
    
    this.model.eventstags = this.getCheckedTags();
    this.model.start_time = moment(this.model.start_time, ["hh:mm a"]).format("HH:mm:ss")
    this.model.end_time = moment(this.model.end_time, ["hh:mm a"]).format("HH:mm:ss")
    this.eventService.addEvent(this.placeResult).subscribe();
 

  }

  loadAuto() {
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


          let address1= place.formatted_address.split(",");
          console.log(address1[0]);
          console.log(address1[1]);
          console.log(address1[2]);
          let address2 = address1[1].split(" ");
          let address3 = address1[2].split(" ");
          console.log(address2[1]);
          console.log(address3[0]);
          console.log(address3[1]);
          console.log(address3[2]);          

          let eventLoc = {
            id: this.model.id,
            name: this.model.name,
            date: this.model.date,
            start_time: this.model.start_time,
            end_time: this.model.end_time,
            price: this.model.price,
            eventstags: this.getCheckedTags(),
            active: this.model.active,
            city: address2[1],
            state: address3[1],
            address: address1[0] + ", " + address2[1] + ", " + address3[1],
            zip_code: address3[2],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }
          console.log(eventLoc)
          this.placeResult = eventLoc;

        });
      });
    });
  }

  ngOnInit() {
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
  declarations: [EventsComponent],
  bootstrap: [EventsComponent]
})
export class AppModule { }
