import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Users } from '../users';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatMenuModule, MatExpansionModule, MatRadioModule } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private eventService: EventService) { }

  user: Array<Users>
  model: any = {};

    loading = false;

    



//Adding user function
  addUser(user: Users){
    console.log(user)
    
    this.eventService.addUser(user).subscribe();
  }


//Submit function connecting from Register button to addUser function
onSubmit() {
  this.loading = true;
this.eventService.addUser(this.model).subscribe();

}

  ngOnInit() {
   
  }

}
