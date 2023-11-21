import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GraphqlService} from "../../services/graphql.service";
import {catchError, Observable, tap} from "rxjs";
import {GraphQLResponse, Product} from "../../interface/product";
import {GET_CART_TOTALS} from "../../common/graphql/graphql-queries";
import {map} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {CartItem} from "../../interface/cart-item.interface";
import {AppState} from "../../store/app.state";
import {removeCartItem, updateCartItemQty} from "../../store/cart.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {
  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();
  productDetails$: Observable<Product | undefined> | undefined;
  cartItems$: Observable<CartItem[]>;
  cartItemsCount$: Observable<number>;


  constructor(
    private graphqlService: GraphqlService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.cartItems$ = this.store.pipe(
      select(state => state['cart']),
      map((cartState: { items: CartItem[] }) => cartState.items)
    );
    this.cartItemsCount$ = this.store.select(state => state.cart.items.length);

  }

  ngOnInit(): void {
    this.productDetails$ = this.graphqlService
      .query<GraphQLResponse>(GET_CART_TOTALS, {})
      .pipe(
        tap(result => console.log('GraphQL Response:', result)),
        map(result => result?.product),
        catchError(error => {
          console.error('GraphQL Error:', error);
          // Handle error as needed, e.g., show an error message to the user
          throw error; // Rethrow the error to propagate it to subscribers
        })
      );
  }

  reduceQuantity(item: CartItem) {
    if (item && item.qty && item.qty > 1) {
      this.store.dispatch(updateCartItemQty({cartItemId: item.id, qty: item.qty - 1, variantName: item.variant.name}));
    } else {
      this.store.dispatch(removeCartItem({cartItemId: item.id, variantName: item.variant.name}));
    }
  }

  increaseQuantity(item: CartItem) {
    if (item && item.qty)
      this.store.dispatch(updateCartItemQty({cartItemId: item.id, qty: item.qty + 1, variantName: item.variant.name}));
  }

  goToCheckout() {
    this.router.navigate(['checkout'])
    this.close()
  }

  close() {
    this.closeClicked.emit();
  }
}
