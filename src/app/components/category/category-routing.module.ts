import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryComponent} from "./category.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'product/:name', component: ProductDetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {
}
