import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatAutocompleteModule, MatSliderModule, MatCheckboxModule, MatMenuModule, MatExpansionModule, MatRadioModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';
import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';
import { MapsComponent } from './maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    LandingpageComponent,
    SignupComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatRadioModule,
    HttpClientModule
 

  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
