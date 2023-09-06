import {Injectable} from '@angular/core';
/** Service */
import {HttpHelperService} from "src/app/core/http-helper/http-helper.service";
/** Interface */

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  private BASE_URL = `https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg`;

  constructor(
      private httpHelperService: HttpHelperService,
  ) {
  }

  getItemsService(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.httpHelperService.getRequest(
          this.BASE_URL,
          resolve,
          reject
      );
    });
  }

}
