import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import {StorageService} from "src/app/core/storage/storage.service";

export const canMatchFn: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  const token = storageService.getLocalSession('token');
  // router.navigate(['sign-in']).then();
  return !!token
};

export const canActivateFn: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {

  return inject(StorageService).getLocalSession('token')
      ? true
      : inject(Router).createUrlTree(['/sign-in']);

};
