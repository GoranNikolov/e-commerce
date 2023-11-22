import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";

import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {SearchResultComponent} from "./components/search-result/search-result.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {CategoryComponent} from "./components/category/category.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product/:name', component: ProductDetailComponent},
  {path: 'search', component: SearchResultComponent},
  {path: 'category/:name', component: CategoryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
