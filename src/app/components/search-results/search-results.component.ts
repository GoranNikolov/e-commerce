import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";
import {GraphqlService, Product} from "../../services/graphql.service";
import {SEARCH_PRODUCTS} from "../../common/graphql/graphql-queries";
import {map} from "rxjs/operators";
import {FacetService} from "../../services/facet.service";
import {SharedServiceService} from "../../services/shared-service.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string | undefined;
  items$: Observable<Product[]> | any;
  facetList: { name: string, values: { name: any; id: any; }[] }[] = [];


  constructor(private route: ActivatedRoute,
              private graphqlService: GraphqlService,
              private facetService: FacetService,
              private sharedService: SharedServiceService) {
  }

  //FIX ME
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'];
      this.items$ = this.graphqlService
        .query(SEARCH_PRODUCTS, {
          input: {
            term: this.searchTerm,
            take: 20,
            groupByProduct: true,
            skip: 0

          },
        })
        .pipe(
          tap(result => console.log('GraphQL Response:', result)),
          map((result: any) => {
            this.facetList = this.facetService.transformFacets(result.search?.facetValues);
            return result.search?.items || [];
          }),
          map((items: Product[]) => items.filter
          (item => !(item.description === "" && item.productAsset === null))) // Filter out items with empty description and null productAsset
        );
    });
    this.sharedService.getSearchObservable().subscribe(data => {
      this.performSearch(data);
    });
  }

  performSearch(facetValueFilters: { and: string }[]) {
    this.items$ = this.graphqlService
      .query(SEARCH_PRODUCTS, {
        input: {
          take: 20,
          groupByProduct: true,
          skip: 0,
          facetValueFilters: facetValueFilters,
        },
      })
      .pipe(
        tap(result => console.log('GraphQL Response:', result)),
        map((result: any) => result.search?.items || []),
        map((items: Product[]) =>
          items.filter(item => !(item.description === '' && item.productAsset === null))
        )
      );
  }
}
