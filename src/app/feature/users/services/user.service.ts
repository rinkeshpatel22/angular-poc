import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User, UserResponse } from '../models/user';


@Injectable()
export class UserService {

  url = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  searchUser(value: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.url}/search?q=${value}`)
      .pipe(catchError((e) => {
        console.warn(e);
        return of();
      }));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
      .pipe(catchError((e) => {
        console.warn(e);
        return of();
      }));
  }
}
