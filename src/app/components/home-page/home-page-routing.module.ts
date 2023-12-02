import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product/:name', component: ProductDetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {
}
