import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
