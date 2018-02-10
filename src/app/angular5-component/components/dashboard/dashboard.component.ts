import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { CommonService } from '../../services/common.service';
import { PieGridChart, PieChart } from '../../model/chart-configuration.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pieChart: PieChart = new PieChart();
  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.loadingService.toggleLoadingIndicator(false);
    this.pieChart.results = [
      {
        name: 'Germany',
        value: 8940000
      },
      {
        name: 'USA',
        value: 5000000
      },
      {
        name: 'France',
        value: 7200000
      }
    ];
  }
  onSelect(event) {
    console.log(event);
  }
}
