import {NgModule} from '@angular/core';
import {ProductListItemModule} from "../product-list-item/product-list-item.module";
import {SideFilterModule} from "../side-filter/side-filter.module";
import {SearchResultComponent} from "./search-result.component";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe} from "@angular/common";
import {SearchResultRoutingModule} from "./search-result-routing.module";

@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    ProductListItemModule,
    SideFilterModule,
    MatListModule,
    AsyncPipe,
    SearchResultRoutingModule
  ],
  exports: [SearchResultComponent],
})
export class SearchResultModule {
}
