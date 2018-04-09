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

 
  addUsers(user: Users): Observable<Users> {
    // CATS.push(user);
    return this.http.post<Users>(this.serviceEndpoint, user);
 
  }
   
  
  constructor( private http: HttpClient) { }
}
