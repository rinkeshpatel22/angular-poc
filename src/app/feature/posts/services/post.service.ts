import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PostResponse } from '../models/post';


@Injectable()
export class PostService {

  url = 'https://dummyjson.com/posts?limit=150';

  constructor(private httpClient: HttpClient) { }

  getCarts(): Observable<PostResponse> {
    return this.httpClient.get<PostResponse>(this.url)
      .pipe(catchError((e) => {
        console.warn(e);
        return of();
      }));
  }
}
