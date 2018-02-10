import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
      ScrollToTopComponent,
      TabsComponent,
      TabComponent
  ],
  exports: [
    ScrollToTopComponent,
    TabsComponent,
    TabComponent
  ],
    providers: [
    ]
})
export class LibraryModule { }
