export class PieGridChart {
  results: any[] = [];
  view: any[] = [700, 400];
  showLabels = false;
  explodeSlices = false;
  doughnut = false;
  showPieLegend = true;
  colorScheme = {
      domain: ['#9c27b0', '#4caf50', '#ff9800', '#00bcd4']
  };
}

export class PieChart {
  results: any[] = [];
  view: any[] = [700, 400];
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showPieLegend = true;
  showLegend = true;
  colorScheme = {
      domain: ['#9c27b0', '#4caf50', '#ff9800', '#00bcd4']
  };
}

export class HorizontalBarChart {
  results: any[] = [];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = {
      domain: ['#9c27b0', '#4caf50', '#ff9800', '#00bcd4']
  };
}
