import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CartWidgetModule} from "./components/cart-widget/cart-widget.module";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from '@ngrx/store';
import {cartReducer} from "./store/cart.reducer";
import {GraphQLModule} from "./common/graphql/graphql.module";
import {CategoryModule} from "./components/category/category.module";
import {LoginModule} from "./components/login/login.module";
import {SignUpModule} from "./components/sign-up/sign-up.module";
import {ErrorPageModule} from "./components/error-page/error-page.module";
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {HomePageModule} from "./components/home-page/home-page.module";
import {ProductDetailModule} from "./components/product-detail/product-detail.module";
import {CheckoutModule} from "./components/checkout/checkout.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartWidgetModule,
    GraphQLModule,
    StoreModule.forRoot({cart: cartReducer}),
    AppRoutingModule,
    CategoryModule,
    LoginModule,
    SignUpModule,
    ErrorPageModule,
    HeaderModule,
    FooterModule,
    HomePageModule,
    ProductDetailModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
