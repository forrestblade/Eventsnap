import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users';
import { Events } from './events';
import { UserPlan } from './userplan';
import { Tags } from './tags';
import { EventsTags } from './eventsTags';



@Injectable()
export class EventService {

    httpClient: any;
 
    constructor(private http: HttpClient) { }

    serviceEndpoint = 'http://localhost:8080';

//  <!-- getUsers function grabs data from the database and displays them - User component shows how to display on Frontend HTML-->
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/users");
  }
  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>("http://localhost:8080/events");
  }
  getUserPlan(): Observable<UserPlan[]> {
    return this.http.get<UserPlan[]>("http://localhost:8080/userplan");
  }
  getTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>("http://localhost:8080/tags")
  }

  deleteUser(user: Users): Observable<Users> {
    return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
  }

  editUsers(user: Users): Observable<Users> {
    return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
  }

 //  <!-- addUsers function that inputs into Database - needs a JSON header in order to post to postman-->
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

  addUser(users: Users) {
    console.log(users)
    let user = {
      username: users.username,
      email_address: users.email_address,
      password: users.password
    
    }
  
    const headers = this._headers;
    // JSON Stringify is needed to input into postman as well
    let userJson = JSON.stringify(user);
    console.log(userJson);
    return this.http.post(this.serviceEndpoint, userJson,{ headers : headers } )
 
  }
  

  addEvent(events: Events){
    console.log(events)
    let event = {
      // id: events.id,
      name: events.name,
      date: events.date,
      start_time: (events.date + "T" + events.start_time),
      end_time: (events.date + "T" + events.end_time),      
      price: events.price,
      eventstags: events.eventstags
    }

    const headers = this._headers;
    let eventJson = JSON.stringify(event);
    console.log(eventJson);
    return this.http.post("http://localhost:8080/eventstagstransfer", eventJson, {headers: headers})
  }

  addUserPlan(userPlan: UserPlan){
    console.log(userPlan)
    let userPlans = {
      date: userPlan.date,
      start_time: (userPlan.date + "T" + userPlan.start_time),
      end_time: (userPlan.date + "T" + userPlan.end_time),
      budget: userPlan.budget,
      // tags: userPlan.userPlanTags_id
    }

    const headers = this._headers;
    let userPlanJson = JSON.stringify(userPlans);
    console.log(userPlanJson);
    return this.http.post("http://localhost:8080/userplan", userPlanJson, {headers: headers})
  }

  addEventsTags(eventsTags: EventsTags){
    console.log(eventsTags)
    let eventsTag = {
      // id: events.id,
      events_id: eventsTags.events_id,
      tags_id: eventsTags.tags_id
    }

    const headers = this._headers;
    let eventJson = JSON.stringify(eventsTag);
    console.log(eventJson);
    return this.http.post("http://localhost:8080/eventstags", eventJson, {headers: headers})
  }

 
 
 
 
}