import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../_models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  // BehaviorSubject is A Subject that requires an initial value and emits its current value to new subscribers
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;
  
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() : User {
    return this.currentUserSubject.value;
  }

  login(userName, password) {
    return this.http.post<any>(`${apiUrl}/users/authenticate`, {userName, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', user);
        this.currentUserSubject.next(user);
        return user;
      }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
