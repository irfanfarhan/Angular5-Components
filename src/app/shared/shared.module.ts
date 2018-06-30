import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { LoadingService } from './services/loading.service';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../../environments/environment';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxChartsModule,
    AgmCoreModule.forRoot(environment.googleMapApi),
  ],
  declarations: [LoginRedirectComponent, LoaderComponent],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoginRedirectComponent,
    NgxChartsModule,
    LoaderComponent,
    AgmCoreModule
  ],
  providers: [LoadingService]
})
export class SharedModule {}
