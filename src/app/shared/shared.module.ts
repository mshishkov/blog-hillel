import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PopupsModule } from './components/popups/popups.module';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';
import { CounterDirective } from './directives/counter.directive';
import { RemoveDirective } from './directives/remove.directive';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { NewsModule } from '../news/news.module';
import { EditInlineDirective } from './directives/edit-inline.directive';

@NgModule({
  imports: [
    CommonModule,
    PopupsModule
  ],
  declarations: [
    SharedComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    SidebarComponent,
    ImageHolderComponent,
    CounterDirective,
    RemoveDirective,
    HeaderLogoComponent,
    HeaderAuthComponent,
    EditInlineDirective
  ],
  exports: [
    SharedComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    SidebarComponent,
    ImageHolderComponent,
    CounterDirective,
    RemoveDirective,
    HeaderLogoComponent,
    HeaderAuthComponent,
    EditInlineDirective
  ]
})
export class SharedModule { }
