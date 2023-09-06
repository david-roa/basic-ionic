import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginPage} from "src/app/modules/components/login/login.page";
import {LoginPageRoutingModule} from "src/app/modules/components/login/login.routing";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    IonicModule,
  ],
  providers: [CurrencyPipe]
})
export class LoginPageModule {
}
