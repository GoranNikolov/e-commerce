import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterLink} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {SearchResultModule} from "../search-result/search-result.module";
import {MatIconModule} from "@angular/material/icon";
import {CartWidgetModule} from "../cart-widget/cart-widget.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProductSearchBarModule} from "../product-search-bar/product-search-bar.module";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatMenuModule,
    SearchResultModule,
    MatIconModule,
    CartWidgetModule,
    MatToolbarModule,
    ProductSearchBarModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
