import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
  }
}
