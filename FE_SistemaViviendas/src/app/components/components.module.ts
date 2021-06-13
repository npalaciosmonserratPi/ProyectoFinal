import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { QuillModule } from 'ngx-quill'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentCommonModule } from '../common/component-common.module';

import { DashboardComponent } from './dashboard/dashboard.component';

/** Tipologias */
import { TipologiasComponent } from './tipologias/tipologias.component';
import { TipologiaFormComponent } from './tipologias/tipologia-form/tipologia-form.component';
import { TipologiaConsultComponent } from './tipologias/tipologia-consult/tipologia-consult.component';

@NgModule({
  imports: [
    FormsModule,
    ComponentCommonModule,
    QuillModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent,
    TipologiaConsultComponent
  ],
  exports: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent,
    TipologiaConsultComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class ComponentsModule { }
