import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {AssetPreviewPipeModule} from "../../pipes/asset-preview/asset-preview.pipe.module";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormatPricePipeModule} from "../../pipes/format-price/format-price.pipe.module";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    AssetPreviewPipeModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    FormatPricePipeModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule, // Make sure to import BrowserAnimationsModule
    MatSnackBarModule, // Import MatSnackBarModule

  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule {
}
