import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SearchResultComponent} from "./search-result.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";


const routes: Routes = [
  {path: '', component: SearchResultComponent},
  {path: 'product/:name', component: ProductDetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultRoutingModule {
}
