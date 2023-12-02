import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from "./checkout.component";
import {AssetPreviewPipeModule} from "../../pipes/asset-preview/asset-preview.pipe.module";
import {FormatPricePipeModule} from "../../pipes/format-price/format-price.pipe.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {CheckoutRoutingModule} from "./checkout-routing.module";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    AssetPreviewPipeModule,
    FormatPricePipeModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    CheckoutRoutingModule
  ],
  exports: [CheckoutComponent]

})
export class CheckoutModule {
}
