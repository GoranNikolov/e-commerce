import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphqlService } from '../../services/graphql.service';
import { GET_PRODUCT_DETAILS } from '../../common/graphql/graphql-queries';
import {GraphQLResponse, Product} from "../../interface/product";
import {ADD_TO_CART} from "../../common/graphql/graphql-mutation";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productName: string | null | undefined = null;
  productDetails$: Observable<Product | undefined> | undefined; // Use optional chaining
  selectedVariant: any; // Assuming your variants have any type, replace it with the actual type
  qty = 1;


  constructor(private route: ActivatedRoute, private graphqlService: GraphqlService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productName = params.get('name');
      // Perform additional actions based on the product name, such as fetching detailed data
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
          // Handle error as needed, e.g., show an error message to the user
          throw error; // Rethrow the error to propagate it to subscribers
        })
      );
    this.productDetails$.subscribe(product => {
      if (product && product.variants && product.variants.length > 0) {
        this.selectedVariant = product.variants[0];
      }
    });
  }
  //ADD TO STATE
  addToCart(variant: any, qty: number) {
    this.graphqlService.mutate<any>(ADD_TO_CART, {
      variantId: variant.id,
      qty,
    }).subscribe(({addItemToOrder}) => {

    });
  }

}
