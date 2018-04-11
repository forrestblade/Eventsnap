import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users';


@Injectable()
export class EventService {

  httpClient: any;
 
  constructor( private http: HttpClient) { }

 serviceEndpoint = 'http://localhost:8080/users';

//  <!-- getUsers function grabs data from the database and displays them - User component shows how to display on Frontend HTML-->
 getUsers(): Observable<Users[]> {
   return this.http.get<Users[]>("http://localhost:8080/users");
 }

 deleteUser(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }


 editUsers(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }

 //  <!-- addUsers function that inputs into Database - needs a JSON header in order to post to postman-->
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

 addUser(user: Users) {
  console.log(user)
  let users = {
    
    username: user.username,
    email_address: user.email_address,
    
    
  }
  
  const headers = this._headers;
  // JSON Stringify is needed to input into postman as well
  let user1 = JSON.stringify(users);
  
  console.log(user1);
  
  return this.http.post(this.serviceEndpoint, user1,{ headers : headers } )
 
 }
 
 
 
}