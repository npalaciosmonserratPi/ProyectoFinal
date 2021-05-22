import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipologiasComponent } from './tipologias/tipologias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    TipologiasComponent
  ],
  exports: [
    DashboardComponent,
    TipologiasComponent
  ]
})
export class ComponentsModule { }
