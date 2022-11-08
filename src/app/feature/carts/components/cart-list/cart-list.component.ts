import { Component } from '@angular/core';
import { Cart } from '../../models/cart';
import { CartsService } from '../../services/carts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {

  public cartList: Cart[];
  public trackByFunction = (index: number, cart: Cart): number => cart.id;

  constructor(private cartsService: CartsService, route: ActivatedRoute) {
    this.cartList = route.snapshot.data['cartResponse'].carts;
  }

  public deleteCart(id: number): void {
    this.cartsService.deleteCart(id).subscribe(() => {
      const index = this.cartList?.findIndex((cart: Cart) => cart.id === id);
      if (index >= 0) {
        this.cartList?.splice(index, 1);
      }
    })
  }
}
