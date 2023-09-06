import {Component} from '@angular/core';
import {Tab1Service} from "src/app/modules/components/tab1/service/tab1.service";
import {StorageService} from "src/app/core/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data: any = {} as any;

  constructor(
      private tab1Service: Tab1Service,
      private storageService: StorageService,
      private router: Router
  ) {
  }

  event() {
    this.tab1Service.getItemsService().then(res => {
      console.log(res)
      this.data = JSON.stringify(res);
    });
  }

  exit() {
    this.storageService.clearAllSession();
    this.router.navigate(['sign-in']).then()
  }
}
