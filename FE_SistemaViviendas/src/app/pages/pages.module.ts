import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { COMPONENTS_ROUTES } from '../components/components-routing.module';
import { ComponentCommonModule } from '../common/component-common.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ComponentCommonModule,
    COMPONENTS_ROUTES,
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
