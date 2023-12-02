import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "./sign-up.component";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SignUpRoutingModule} from "./sign-up-routing.module";


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    SignUpRoutingModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule {
}
