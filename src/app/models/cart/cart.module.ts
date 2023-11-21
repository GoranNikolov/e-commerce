import { NgModule } from '@angular/core';
import {CartWidgetComponent} from "../../components/cart-widget/cart-widget.component";
import {MaterialModule} from "../material/material.module";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [CartWidgetComponent],
  imports: [
    MaterialModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    CartWidgetComponent
  ]
})
export class CartModule {}
