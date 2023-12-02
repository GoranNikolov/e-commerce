import {NgModule} from '@angular/core';
import {HomePageComponent} from "./home-page.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AsyncPipe, NgIf} from "@angular/common";
import {ProductListItemModule} from "../product-list-item/product-list-item.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SideFilterModule} from "../side-filter/side-filter.module";
import {HomePageRoutingModule} from "./home-page-routing.module";


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    MatPaginatorModule,
    AsyncPipe,
    ProductListItemModule,
    MatProgressSpinnerModule,
    NgIf,
    SideFilterModule,
    HomePageRoutingModule,
  ],
  exports: [HomePageComponent]
})
export class HomePageModule {
}
