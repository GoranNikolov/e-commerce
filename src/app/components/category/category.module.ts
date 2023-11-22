import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListItemModule} from "../product-list-item/product-list-item.module";
import {SideFilterModule} from "../side-filter/side-filter.module";
import {CategoryComponent} from "./category.component";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [CategoryComponent],

  imports: [
    CommonModule,
    ProductListItemModule,
    SideFilterModule,
    MatDividerModule,
  ],
  exports: [CategoryComponent]
})
export class CategoryModule {
}
