import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from 'src/app/modules/components/tab3/tab3.page';
import { ExploreContainerComponentModule } from 'src/app/shared/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from 'src/app/modules/components/tab3/tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
