import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LibraryModule } from '../lib/lib.module';
import { LoadingService } from '../shared/services/loading.service';
import { Angular5ComponentRoutingModule } from './angular5-component-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonService } from './services/common.service';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  imports: [CommonModule, SharedModule, LibraryModule, Angular5ComponentRoutingModule],
  declarations: [
    NavigationComponent,
    DashboardComponent,
    ChartsComponent
  ],
  entryComponents: [],
  providers: [LoadingService, CommonService]
})
export class Angular5ComponentModule {}
