import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GraphqlService} from "../../services/graphql.service";
import {catchError, Observable, tap} from "rxjs";
import {GraphQLResponse, Product} from "../../interface/product";
import {GET_CART_TOTALS} from "../../common/graphql/graphql-queries";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {
  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();
  productDetails$: Observable<Product | undefined> | undefined; // Use optional chaining


  constructor(private graphqlService: GraphqlService) {
  }

  ngOnInit(): void {

    this.productDetails$ = this.graphqlService
      .query<GraphQLResponse>(GET_CART_TOTALS, {
        id: "9"
      })
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

  close() {
    this.closeClicked.emit();
  }
}
