import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductSearchBarComponent} from "./product-search-bar.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProductSearchBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ProductSearchBarComponent]
})
export class ProductSearchBarModule {
}
