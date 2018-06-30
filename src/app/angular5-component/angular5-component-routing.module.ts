import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AngularGoogleMapComponent } from './components/angular-google-map/angular-google-map.component';
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
  },
  {
    path: 'google-maps',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: AngularGoogleMapComponent
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
