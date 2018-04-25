import { Component, OnInit, NgModule, ViewChild, ElementRef, NgZone } from '@angular/core';
import { EventService } from '../event.service';
import { Events } from '../events';
<<<<<<< HEAD
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
=======
import { Locations } from '../location';
>>>>>>> master

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {



  public searchControl: FormControl;
  
  
  @ViewChild("search") public searchElementRef: ElementRef;
  constructor(public eventService: EventService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  events: Array<Events>
  model: any = {};
  loading = false;
 
 


  addEvent(events: Events){
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
    .subscribe(data => this.events = data);
  }
  

  onSubmit() {
    this.loading = true;
    this.eventService.addEvent(this.model).subscribe();
    
  }

  
  ngOnInit() {
    this.getEvents();


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
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });

  }
}

  @NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule, 
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAxCC0Uet-dbqTGnbvojZ7SgFuQkx4hVcE',
        libraries: ["places"]
      }),
    ],
    exports: [FormsModule],
    declarations: [ EventsComponent ],
    bootstrap: [ EventsComponent ]
  })
  export class AppModule {};


