import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsRoutingModule } from './carts-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartsService } from './services/carts.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from '../users/services/user.service';
import { CartResolverGuard } from './cart-resolver.guard';


@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [CartsService, UserService, CartResolverGuard]
})
export class CartsModule { }
