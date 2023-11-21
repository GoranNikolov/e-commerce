import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CartItem} from "../../interface/cart-item.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {removeCartItem} from "../../store/cart.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.cartItems$ = this.store.select((state) => state.cart.items);
  }

  ngOnInit(): void {
  }

  removeItem(cartItemId: string, variantName: string): void {
    this.store.dispatch(removeCartItem({cartItemId, variantName}));
  }

  calculateSubtotal(item: CartItem): number {
    if (item.qty !== undefined) {
      return item.qty * item.variant.price;
    } else {
      return 0;
    }
  }

  calculateTotalSubtotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, item) => total + this.calculateSubtotal(item), 0);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
