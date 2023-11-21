import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CoreModule} from "./models/core/core.module";
import {HomeModule} from "./models/home/home.module";
import {ProductModule} from "./models/product/product.module";
import {CartModule} from "./models/cart/cart.module";
import {AuthModule} from "./models/auth/auth.module";
import {SearchModule} from "./models/search/search.module";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutModule} from "./models/layout/layout.module";
import {StoreModule} from '@ngrx/store';
import {cartReducer} from "./store/cart.reducer";
import {GraphQLModule} from "./models/graphql/graphql.module";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {SharedModule} from "./models/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    CoreModule,
    LayoutModule,
    HomeModule,
    ProductModule,
    CartModule,
    AuthModule,
    SearchModule,
    LayoutModule,
    GraphQLModule,
    StoreModule.forRoot({cart: cartReducer}),
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
