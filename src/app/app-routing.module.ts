import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {CustomPreloadModules} from "../environments/environment";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home-page/home-page.module').then(
        (module) => module.HomePageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./components/search-result/search-result.module').then(
        (module) => module.SearchResultModule
      ),
  },
  {
    path: 'category/:name',
    loadChildren: () =>
      import('./components/category/category.module').then(
        (module) => module.CategoryModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./components/checkout/checkout.module').then(
        (module) => module.CheckoutModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./components/sign-up/sign-up.module').then(
        (module) => module.SignUpModule
      ),
  },
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadModules})],
  exports: [RouterModule],
  providers: [CustomPreloadModules],

})
export class AppRoutingModule {
}
