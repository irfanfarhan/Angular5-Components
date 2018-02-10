import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
