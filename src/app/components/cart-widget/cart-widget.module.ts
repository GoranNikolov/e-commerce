import {NgModule} from '@angular/core';
import {CartWidgetComponent} from "./cart-widget.component";
import {AssetPreviewPipeModule} from "../../pipes/asset-preview/asset-preview.pipe.module";
import {FormatPricePipeModule} from "../../pipes/format-price/format-price.pipe.module";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  declarations: [CartWidgetComponent],
  imports: [
    AssetPreviewPipeModule,
    FormatPricePipeModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    NgForOf,
  ],
  exports: [
    CartWidgetComponent,

  ]
})
export class CartWidgetModule {
}
