import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {canActivateFn} from 'src/app/core/guards/auth/guard';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () =>
        import('./modules/components/login/login.module').then(
            m => m.LoginPageModule
        )
  },
  {
    path: '',
    canActivate: [canActivateFn],
    loadChildren: () =>
        import('./modules/components/dashboard/dashboard.module').then(
            m => m.DashboardModule
        )
  },
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRouting {
}
