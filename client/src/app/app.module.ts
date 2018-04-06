import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule

>>>>>>> fcaf99d639634a523d6cfe974e2e881b5e270aec
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
