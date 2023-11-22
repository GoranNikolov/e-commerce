import {CommonModule} from '@angular/common';
import {NgModule} from "@angular/core";
import {SideFilterComponent} from "./side-filter.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule {
}
