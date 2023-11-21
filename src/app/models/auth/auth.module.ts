import {NgModule} from '@angular/core';
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import {CoreModule} from "../core/core.module";
import {MaterialModule} from "../material/material.module";
import {LoginComponent} from "../../components/login/login.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
  exports: [
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    MaterialModule,
    RouterLink,

  ]
})
export class AuthModule {
}
