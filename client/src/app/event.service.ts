import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users';

@Injectable()
export class EventService {

  

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/users");
  }
   
  
  constructor( private http: HttpClient) { }
}
