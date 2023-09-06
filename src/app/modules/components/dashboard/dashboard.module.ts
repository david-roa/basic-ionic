/** Modules */
import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
/** Material */
/** Routing */
import {DashboardRoutingModule} from './dashboard.routing';
/** Components */
import {DashboardPage} from "src/app/modules/components/dashboard/dashboard.page";
/** Pipe */
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {ExploreContainerComponentModule} from "src/app/shared/explore-container/explore-container.module";

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
  ],
  providers: [CurrencyPipe]
})
export class DashboardModule {
}
