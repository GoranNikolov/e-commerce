import {NgModule} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

import {CoreModule} from "../core/core.module";
import {SearchModule} from "../search/search.module";
import {CartModule} from "../cart/cart.module";
import {MaterialModule} from "../material/material.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CoreModule,
    SearchModule,
    CartModule,
    MaterialModule,
    RouterLink
  ]
})
export class LayoutModule {
}
