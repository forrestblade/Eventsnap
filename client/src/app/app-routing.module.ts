import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
