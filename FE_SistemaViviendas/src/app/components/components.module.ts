import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipologiasComponent } from './tipologias/tipologias.component';
import { TipologiaFormComponent } from './tipologias/tipologia-form/tipologia-form.component';
import { ComponentCommonModule } from '../common/component-common.module';
import { QuillModule } from 'ngx-quill'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentCommonModule,
    QuillModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent
  ],
  exports: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent
  ]
})
export class ComponentsModule { }
