import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from 'src/app/modules/components/tab2/tab2.page';
import { ExploreContainerComponentModule } from 'src/app/shared/explore-container/explore-container.module';

import { Tab2PageRoutingModule } from 'src/app/modules/components/tab2/tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
