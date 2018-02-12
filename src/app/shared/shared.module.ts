import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { PaginationComponent } from './pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PopupsModule } from './popups/popups.module';

@NgModule({
  imports: [
    CommonModule,
    PopupsModule
  ],
  declarations: [SharedComponent, BreadcrumbsComponent, PaginationComponent, SidebarComponent],
  exports: [SharedComponent, BreadcrumbsComponent, PaginationComponent, SidebarComponent]
})
export class SharedModule { }
