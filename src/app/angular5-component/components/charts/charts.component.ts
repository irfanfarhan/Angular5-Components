import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../shared/services/loading.service';
import { PieGridChart, PieChart, HorizontalBarChart } from '../../model/chart-configuration.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  pieChart: PieChart = new PieChart();
  horizontalBarChart: HorizontalBarChart = new HorizontalBarChart();
  constructor(
    private loadingService: LoadingService,
    private router: Router
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
    this.horizontalBarChart.results = [
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

