import { NgModule } from '@angular/core';
import { SearchResultsComponent } from "../../components/search-results/search-results.component";
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { ListItemsComponent } from "../../components/list-items/list-items.component";
import { CoreModule } from "../core/core.module";
import { SearchModule } from "../search/search.module";
import { CategoryComponent } from "../../components/category/category.component";
import { SharedModule } from "../shared/shared.module";
import { CheckoutComponent } from "../../components/checkout/checkout.component";
import { AuthModule } from "../auth/auth.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    SearchResultsComponent,
    ProductDetailComponent,
    ListItemsComponent,
    CategoryComponent,
    CheckoutComponent,
  ],
  imports: [
    CoreModule,
    SearchModule,
    SharedModule,
    AuthModule,
    RouterLink,
  ],
  exports: [
    ListItemsComponent,
  ]
})
export class ProductModule {
}
