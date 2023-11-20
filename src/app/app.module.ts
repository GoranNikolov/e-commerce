import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {cartReducer} from "./store/cart.reducer";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {GraphQLModule} from './models/graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {HomePageComponent} from './components/home-page/home-page.component';
import {HeaderComponent} from './components/header/header.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import { ProductSearchBarComponent } from './components/product-search-bar/product-search-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { AssetPreviewPipe } from './pipes/AssetPreviewPipe/asset-preview.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatBadgeModule} from "@angular/material/badge";
import { CartWidgetComponent } from './components/cart-widget/cart-widget.component';
import {MatListModule} from "@angular/material/list";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SideFiltersComponent } from './components/side-filters/side-filters.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProductSearchBarComponent,
    FooterComponent,
    AssetPreviewPipe,
    TruncatePipe,
    CartWidgetComponent,
    ProductDetailComponent,
    ErrorPageComponent,
    SearchResultsComponent,
    ListItemsComponent,
    SignUpComponent,
    SideFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatButtonModule,
    GraphQLModule,
    HttpClientModule,
    CdkMenuItem,
    CdkMenu,
    CdkMenuTrigger,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
