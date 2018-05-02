import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanComponent } from './plan/plan.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    PlanComponent,
    EventsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NouisliderModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxCC0Uet-dbqTGnbvojZ7SgFuQkx4hVcE',
      libraries: ['places']
    }),
    
    RouterModule.forRoot(ROUTES)
  ],
  providers: [EventService, AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
