/** Module */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
/** Component */
import {DashboardPage} from "src/app/modules/components/dashboard/dashboard.page";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('src/app/modules/components/tab1/module/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('src/app/modules/components/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('src/app/modules/components/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
