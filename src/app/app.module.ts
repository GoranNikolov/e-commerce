import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {cartReducer} from "./store/cart.reducer";
import {GraphQLModule} from "./common/graphql/graphql.module";
import {ErrorPageModule} from "./components/error-page/error-page.module";
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ProductDetailModule} from "./components/product-detail/product-detail.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    AppRoutingModule,
    ErrorPageModule,
    HeaderModule,
    ProductDetailModule,
    FooterModule,
    StoreModule.forRoot({cart: cartReducer}),
    !environment.production
      ? [StoreDevtoolsModule.instrument({maxAge: 25})] : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
