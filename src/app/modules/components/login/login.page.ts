import { Component } from '@angular/core';
import {StorageService} from "src/app/core/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(
      private storageService: StorageService,
      private router: Router
  ) {}

  login(){
    const token = 'BQAZCSH2FpTw_TBAu3f3ILOVQWwY_hSu6y328RrchNw7TSVKO9BUGfR24wOAEsH7Ng8Or5mW52GNQpd2lX_uwBE3OhgEypNmAb01d4uCFUIzpo_sqLXiJSp4F4QQm7LXKkiMr6E8p0EsxS8vrSLfzsRUc30CpUKzTi9xSPSnB9iMr7vYDclgWpkQKENM9o24jds3FR6rY-FmfOewcMGH7_Eed9LIdGNLOtPmuwEuN41wrdmnZRWFIoXJswHZ-xtb3i1dIV076pRWLH7hBxnmvyuV';
    this.storageService.putLocalSession('token', token);
    this.router.navigate(['']).then()
  }
}
