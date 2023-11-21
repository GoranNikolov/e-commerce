import { NgModule } from '@angular/core';
import {HomePageComponent} from "../../components/home-page/home-page.component";
import {MaterialModule} from "../material/material.module";
import {CoreModule} from "../core/core.module";
import {SearchModule} from "../search/search.module";
import {ProductModule} from "../product/product.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    MaterialModule,
    CoreModule,
    SearchModule,
    ProductModule,
  ],

})
export class HomeModule {}
