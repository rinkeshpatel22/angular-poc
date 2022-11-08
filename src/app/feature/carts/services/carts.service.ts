import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Cart, CartResponse } from '../models/cart';

@Injectable()
export class CartsService {

  url = 'https://dummyjson.com/carts';

  constructor(private httpClient: HttpClient) { }

  getCarts(): Observable<CartResponse> {
    return this.httpClient.get<CartResponse>(this.url)
      .pipe(catchError((e) => {
        console.warn(e);
        return of();
      }));
  }

  deleteCart(id: number): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${this.url}/${id}`)
      .pipe(catchError((e) => {
        console.warn(e);
        return of();
      }));
  }
}
