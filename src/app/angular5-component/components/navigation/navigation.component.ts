import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  showMenu: boolean;
  constructor(
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.showMenu = this.commonService.showMenu;
    if (this.router.url != this.commonService.landingPageLink) {
      this.commonService.showMenu = true;
      this.showMenu = this.commonService.showMenu;
    }
  }
  navigateHome() {
    this.router.navigate(['/irfan']);
    this.commonService.showMenu = false;
  }
}
