import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';

const angular5ComponentRoutes: Routes = [
  {
    path: 'dashboard',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'charts',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: ChartsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(angular5ComponentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class Angular5ComponentRoutingModule { }
