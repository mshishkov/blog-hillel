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
import { MarkupHtmlDirective } from './directives/markup-html.directive';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from '../news/news-helpers/news-list.component';
import { NewsResolverService } from '../news/news-resolver.service';
import { NewsComponent } from '../news/news.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { TagsModule } from '../tags/tags.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';


export const aaaRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/news'}
];

@NgModule({
  imports: [
    CommonModule,
    PopupsModule,
    RouterModule.forChild(aaaRoutes),
    TagsModule,
    ReactiveFormsModule,
    AuthModule
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
    EditInlineDirective,
    MarkupHtmlDirective,
    PreloaderComponent
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
    EditInlineDirective,
    MarkupHtmlDirective,
    RouterModule,
    PreloaderComponent,
    TagsModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class SharedModule { }
