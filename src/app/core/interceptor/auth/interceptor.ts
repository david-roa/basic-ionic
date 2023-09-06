import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StorageService} from "src/app/core/storage/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly session = {} as any;

  constructor(
      private storageService: StorageService
  ) {
    this.session = this.storageService.getLocalSession('token');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.session) {
      req = req.clone({
        setHeaders: {
          Accept: '*/*',
          Authorization: `Bearer ${this.session}`,
        },
      })
    } else
      req = req.clone({
        setHeaders: {
          Accept: '*/*'
        },
      });
    return next.handle(req);
  }
}
