import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EMPTY} from "rxjs";
import {tap, switchMap, map, catchError} from "rxjs/operators";
import {GraphqlService, Product} from "../../services/graphql.service";
import {GET_COLLECTION, SEARCH_PRODUCTS} from "../../common/graphql/graphql-queries";
import {FacetService} from "../../services/facet.service";
import {SharedServiceService} from "../../services/shared-service.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  searchTerm: string | undefined;
  collectionId: any;
  collectionName: string | any;
  items: Product[] = [];
  facetList: { name: string, values: { name: any; id: any; }[] }[] = [];

  constructor(
    private route: ActivatedRoute,
    private graphqlService: GraphqlService,
    private facetService: FacetService,
    private sharedService: SharedServiceService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      tap(params => {
        this.searchTerm = params['name'];
      }),
      switchMap(() => this.graphqlService.query(GET_COLLECTION, {slug: this.searchTerm}).pipe(
        // tap(result => console.log('GraphQL Collection Response:', result)),
        map((result: any) => {
          const idCollection = result.collection?.id || null;
          const nameCollection = result.collection?.name || null;
          return {idCollection, nameCollection};
        }),
        catchError(error => {
          console.error('Error fetching collection:', error);
          return EMPTY;
        })
      )),
      switchMap(({idCollection, nameCollection}) => {
        this.collectionId = idCollection;
        this.collectionName = nameCollection;
        return this.graphqlService.query(SEARCH_PRODUCTS, {
          input: {
            collectionId: this.collectionId,
            take: 20,
            groupByProduct: true,
            skip: 0
          },
        }).pipe(
          // tap(result => console.log('GraphQL Items Response:', result)),
          map((result: any) => {
            const items = result.search?.items || [];
            const facetValues = result.search?.facetValues || [];
            const facetList = this.facetService.transformFacetResults(facetValues);
            return {items, facetList};
          }),
          catchError(error => {
            console.error('Error fetching items:', error);
            return EMPTY;
          })
        );
      })
    ).subscribe({
      next: ({items, facetList}) => {
        this.items = items;
        this.facetList = facetList.filter(facet => facet.name !== 'category');
      },
      error: error => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching complete.');
      }
    });
    this.sharedService.getSearchObservable().subscribe(data => {
      this.performSearch(data);
    });
  }

  performSearch(facetValueFilters: { and: string }[]) {
    this.graphqlService
      .query(SEARCH_PRODUCTS, {
        input: {
          collectionId: this.collectionId,
          take: 20,
          groupByProduct: true,
          skip: 0,
          facetValueFilters: facetValueFilters,
        },
      })
      .pipe(
        // tap(result => console.log('GraphQL Response:', result)),
        map((result: any) => result.search?.items || []),
        map((items: Product[]) =>
          items.filter(item => !(item.description === '' && item.productAsset === null))
        )
      )
      .subscribe({
        next: (items) => {
          this.items = items;
        },
        error: (error) => {
          console.error('Error fetching search results:', error);
        },
        complete: () => {
          console.log('Search complete.');
        },
      });
  }
}
