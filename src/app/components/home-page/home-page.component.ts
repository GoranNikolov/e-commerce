import {Component, OnInit, ViewChild} from '@angular/core';
import {GET_PRODUCTS, SEARCH_PRODUCTS} from "../../common/graphql/graphql-queries";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GraphqlService, Product} from "../../services/graphql.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {FacetService} from "../../services/facet.service";
import {SharedServiceService} from "../../services/shared-service.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  items$: Observable<Product[]> | any;
  totalCount: number = 0;
  pageSizeOptions: number[] = [5, 10, 25];
  pageSize: number = this.pageSizeOptions[2];
  pageIndex: number = 0;
  facetList: { name: string, values: { name: any; id: any; }[] }[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private graphqlService: GraphqlService,
              private facetService: FacetService,
              private sharedService: SharedServiceService) {
  }

  ngOnInit() {
    this.loadItems();
    this.sharedService.getSearchObservable().subscribe(data => {
      this.performSearch(data);
    });
  }

  loadItems() {
    const skip = this.pageIndex * this.pageSize;
    this.items$ = this.graphqlService
      .query(GET_PRODUCTS, {
        options: {
          take: this.pageSize,
          skip: skip,
        },
      })
      .pipe(
        map((result: any) => {
          this.totalCount = result.products?.totalItems || 0;
          this.facetList = this.facetService.transformFacets(result.products?.items);
          return result.products?.items || [];
        })
      );
  }


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadItems();
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
        // tap(result => console.log('GraphQL Response:', result)),
        map((result: any) => result.search?.items || []),
        map((items: Product[]) =>
          items.filter(item => !(item.description === '' && item.productAsset === null))
        )
      );
  }
}

