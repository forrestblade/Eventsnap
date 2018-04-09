import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users';

@Injectable()
export class EventService {

 serviceEndpoint = 'http://localhost:8080/users';

 getUsers(): Observable<Users[]> {
   return this.http.get<Users[]>(this.serviceEndpoint);
 }

 deleteUser(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }


 editUsers(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }


 addUsers(user: Users) {
  console.log(user)
  let users = {
    username: user.username,
    email: user.email
  }
  return this.http.post<Users>(this.serviceEndpoint, users);

 }
 
 
 constructor( private http: HttpClient) { }
}