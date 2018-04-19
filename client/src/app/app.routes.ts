import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { SearchComponent } from './search/search.component';
import { PlanComponent } from './plan/plan.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'plan', component: PlanComponent },
  { path: '**', redirectTo: '' }
];
