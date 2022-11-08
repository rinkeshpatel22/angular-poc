import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { CartResponse } from './models/cart';
import { CartsService } from './services/carts.service';

@Injectable()
export class CartResolverGuard implements Resolve<Observable<CartResponse>>{
  constructor(private cartsService: CartsService, private router: Router) {
  }

  resolve(): Observable<CartResponse> {
    return this.cartsService.getCarts()
      .pipe(catchError(() => {
        alert('No data found');
        return of();
      }));
  }
}
