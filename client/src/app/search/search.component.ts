import { Component, OnInit, NgZone, ElementRef, NgModule, HostListener } from '@angular/core';
import { EventService } from '../event.service';
import { UserPlan } from '../userplan';
import { Events } from '../events';
import * as moment from 'moment-timezone'
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapsAPILoader, AgmCoreModule, AgmMap } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EventsTags } from '../eventsTags';
import { Tags } from '../tags';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 

  
  public searchControl: FormControl;
  public zoom: number;
  public lat: number = 33.4498;
  public lng: number = -112.007;
  // @ViewChild(AgmMap) private agmMap: AgmMap;
  @ViewChild("search") public searchElementRef: ElementRef;
  constructor(public eventService: EventService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  buttonName1: String = "Map View"
  buttonName2: String = "List View"


  userPlan: Array<UserPlan>
  model: any = {};
  loading = false;
  public someRange: number[] = [3, 7];
  public tooltipSlider = document.getElementById('slider-tooltips')
  public sliderTime_min;
  public sliderTime_max;
  public show: boolean = true;
  public hide: boolean = false;

 



  public events: Array<Events>;
  eventsTags: Array<EventsTags>;
  tags: Array<Tags>;
  

  toggleList() {
    if (!this.hide) {
      document.getElementById('list').classList.toggle('bg-moon-gray')
      document.getElementById('mapView').classList.toggle('bg-moon-gray');
      
      this.hide = !this.hide;
      this.show = !this.show;

    }


    // CHANGE THE NAME OF THE BUTTON.
  }

  getTags() {
    this.eventService.getTags()
      .subscribe(data => this.tags = data);
  }

  
  toggleMap() {
    if (!this.show) {
      document.getElementById('mapView').classList.toggle('bg-moon-gray');
      document.getElementById('list').classList.toggle('bg-moon-gray')
      this.hide = !this.hide;
      this.show = !this.show;
    }
    // CHANGE THE NAME OF THE BUTTON.
  }
  addEvent(events: Events) {
    console.log(events)
    this.eventService.addEvent(events).subscribe();
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(data => this.events = data);
  }

 

  convertToTimeMin(someRange) {
    if (someRange[0] == 0 || someRange[0] == 24) {
      this.sliderTime_min = "12:00 AM";
    } else if (someRange[0] == 12) {
      this.sliderTime_min = "12:00 PM"
    } else if (someRange[0] == 12.5) {
      this.sliderTime_min = "12:30 PM"
    } else if (someRange[0] == 0.5) {
      this.sliderTime_min = "12:30 AM"
    } else if ((someRange[0] < 13) && (someRange[0] % 1 == 0)) {
      this.sliderTime_min = (someRange[0] + ":00 AM");
    } else if (someRange[0] < 13) {
      this.sliderTime_min = ((someRange[0] - 0.5) + ":30 AM");
    } else if ((someRange[0] >= 13) && (someRange[0] % 1 == 0)) {
      this.sliderTime_min = ((someRange[0] - 12) + ":00 PM");
    } else if (someRange[0] >= 13) {
      this.sliderTime_min = ((someRange[0] - 12.5) + ":30 PM");
    }
    return this.sliderTime_min;

  }

  convertToTimeMax(someRange) {
    if (someRange[1] == 0 || someRange[1] == 24) {
      this.sliderTime_max = "12:00 AM";
    } else if (someRange[1] == 0.5) {
      this.sliderTime_max = "12:30 AM"
    } else if (someRange[1] == 12) {
      this.sliderTime_max = "12:00 PM"
    } else if (someRange[1] == 12.5) {
      this.sliderTime_max = "12:30 PM"
    } else if ((someRange[1] < 13) && (someRange[1] % 1 == 0)) {
      this.sliderTime_max = (someRange[1] + ":00 AM");
    } else if (someRange[1] < 13) {
      this.sliderTime_max = ((someRange[1] - 0.5) + ":30 AM");
    } else if ((someRange[1] >= 13) && (someRange[1] % 1 == 0)) {
      this.sliderTime_max = ((someRange[1] - 12) + ":00 PM");
    } else if (someRange[1] >= 13) {
      this.sliderTime_max = ((someRange[1] - 12.5) + ":30 PM");
    }
    return this.sliderTime_max;
  }




  addUserPlan(userPlan: UserPlan) {
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

  buttons(){
    if (this.show) {
      document.getElementById('mapView').classList.toggle('bg-moon-gray')
    } else if (this.hide) {
      document.getElementById('list').classList.toggle('bg-moon-gray')
    }
  }




  ngOnInit() {
    this.getTags();
    // this.getUserPlan();
    this.getEvents();
    this.buttons() 
  
    // let map;
    //   let marker;
    //   let events = [];
    //   // events = [
    //   //   title: this.eventService.event.name,

    //   // ]
    //   const DALLAS = {lat: 32.7767, lng: -96.7970};

    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: DALLAS,
    //         zoom: 4
    //     });
    //     var locations = {lat: 55.0000, lng: 79.7800};
    //                       // [title: 'Second', lat: 82.9667, lng: 77.5667],
    //                       // [title: 'Third', lat: 78.4700, lng: 77.0300]}
    //     var title = { title: "USA"};
    //     // for (let i = 0; i < locations.length; i++) {
    //     let markers = new google.maps.Marker({
    //         position: (locations), 
    //      title: 'USA', map: map 
    //         //position: DALLAS,
    //         // map: map,
    //         //title: 'Hello World!'
    //     });
      // }
         //create search FormControl
    this.searchControl = new FormControl();
   
    
    
    //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["geocode"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
          
    //       //set latitude, longitude and zoom
    //       // this.latitude = place.geometry.location.lat();
    //       // this.longitude = place.geometry.location.lng();
    //       // this.zoom = 12;
    //     });
    //   });
    // });

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
  declarations: [ SearchComponent ],
  bootstrap: [ SearchComponent ]
})
export class AppModule {};