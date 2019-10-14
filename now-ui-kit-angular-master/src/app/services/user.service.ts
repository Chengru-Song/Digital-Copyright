import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getAll() {
    return this.http.get<User[]>(`${apiUrl}/users`);
  }

  register(user : User) {
    // return this.http.post(`${apiUrl}/users/register`)
  }

  delete(id : Number) {
    return this.http.delete(`${apiUrl}/users/delete/${id}`);
  }
}
