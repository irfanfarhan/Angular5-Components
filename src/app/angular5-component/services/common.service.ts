import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  showMenu: boolean;
  landingPageLink: any;

  constructor() {
    this.showMenu = false;
    this.landingPageLink = ['/dashboard'];
  }
}
