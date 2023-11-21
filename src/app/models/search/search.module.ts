import {NgModule} from '@angular/core';
import {SideFiltersComponent} from "../../components/side-filters/side-filters.component";
import {ProductSearchBarComponent} from "../../components/product-search-bar/product-search-bar.component";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [ProductSearchBarComponent, SideFiltersComponent],
  exports: [
    ProductSearchBarComponent,
    SideFiltersComponent
  ],
  imports: [
    CoreModule
  ]
})
export class SearchModule {
}
