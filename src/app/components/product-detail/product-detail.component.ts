// Import necessary modules...
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, Observable, Subject, Subscription, takeUntil, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {GraphqlService} from '../../services/graphql.service';
import {GET_PRODUCT_DETAILS} from '../../common/graphql/graphql-queries';
import {GraphQLResponse, Product} from '../../interface/product';
import {select, Store} from '@ngrx/store';
import {addToCart} from '../../store/cart.actions';
import {CartItem} from '../../interface/cart-item.interface';
import {AppState} from '../../store/app.state';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToggleNotificationService} from "../../services/toggle-notification.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productName: string | null | undefined = null;
  productDetails$: Observable<Product | undefined> | undefined;
  selectedVariant: any;
  qty: number = 0;
  totalQty: number = 0;
  private componentDestroyed$: Subject<void> = new Subject<void>();
  private cartSubscription: Subscription | undefined;
  productQuantities: Map<string, number> = new Map<string, number>();
  product: Product | undefined; // Declare product here


  constructor(
    private route: ActivatedRoute,
    private graphqlService: GraphqlService,
    private store: Store<AppState>,
    private snackBar: MatSnackBar,
    private toggleNotificationService: ToggleNotificationService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productName = params.get('name');
    });

    this.productDetails$ = this.graphqlService
      .query<GraphQLResponse>(GET_PRODUCT_DETAILS, {
        slug: this.productName,
      })
      .pipe(
        tap(result => console.log('GraphQL Response:', result)),
        map(result => result?.product),
        catchError(error => {
          console.error('GraphQL Error:', error);
          throw error;
        })
      );

    this.productDetails$.subscribe(product => {
      if (product && product.variants && product.variants.length > 0) {
        this.selectedVariant = product.variants[0];
        this.product = product;
      }
    });

    this.cartSubscription = this.store.pipe(
      select(state => state),
      takeUntil(this.componentDestroyed$)
    ).subscribe((appState: AppState) => {
      if (appState && appState.cart && appState.cart.items) {
        const specificItem = appState.cart.items.find(item => item.id === this.product?.id);
        this.totalQty = specificItem ? specificItem.qty || 0 : 0;
      }
    });
  }

  openSnackBar() {
    let snackBarRef = this.snackBar.open(
      'Added to cart', 'View cart', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });

    snackBarRef.onAction().subscribe(() => {
      this.toggleOverlay();
    });
  }

  toggleOverlay() {
    this.toggleNotificationService.toggleOverlay();
  };

  addToCart(product: any) {
    const newQty = (this.productQuantities.get(product.id) || 0) + 1;
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      images: product.assets,
      qty: newQty,
      variant: this.selectedVariant
    };

    this.store.dispatch(addToCart({cartItem}));
    this.openSnackBar()

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }

    this.productQuantities.clear();
  }
}
