import {NgModule} from '@angular/core';

import {ProductListItemComponent} from "./product-list-item.component";
import {RouterLink} from "@angular/router";
import {CartWidgetModule} from "../cart-widget/cart-widget.module";
import {AssetPreviewPipeModule} from "../../pipes/asset-preview/asset-preview.pipe.module";
import {TruncatePipeModule} from "../../pipes/truncate/truncate.pipe.module";
import {CommonModule, NgForOf} from "@angular/common";

@NgModule({
  declarations: [ProductListItemComponent],
  imports: [
    CommonModule,
    RouterLink,
    CartWidgetModule,
    AssetPreviewPipeModule,
    TruncatePipeModule,
    NgForOf,
  ],
  exports: [
    ProductListItemComponent,
  ]
})
export class ProductListItemModule {
}
