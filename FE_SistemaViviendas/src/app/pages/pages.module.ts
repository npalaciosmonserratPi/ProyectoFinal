import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { COMPONENTS_ROUTES } from '../components/components.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    COMPONENTS_ROUTES,
    NgbModule
  ],
  declarations: [
    PagesComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class PagesModule { }
