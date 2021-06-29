import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { QuillModule } from 'ngx-quill'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { ComponentCommonModule } from '../common/component-common.module';

import { DashboardComponent } from './dashboard/dashboard.component';

/** Tipologias */
import { TipologiasComponent } from './tipologias/tipologias.component';
import { TipologiaFormComponent } from './tipologias/tipologia-form/tipologia-form.component';
import { TipologiaConsultComponent } from './tipologias/tipologia-consult/tipologia-consult.component';
import { ConstructionCostComponent } from './construction-cost/construction-cost.component';
import { AgreementComponent } from './agreement/agreement.component';
import { AgreementFormComponent } from './agreement/agreement-form/agreement-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentCommonModule,
    QuillModule.forRoot(),
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent,
    TipologiaConsultComponent,
    ConstructionCostComponent,
    AgreementComponent,
    AgreementFormComponent
  ],
  exports: [
    DashboardComponent,
    TipologiasComponent,
    TipologiaFormComponent,
    TipologiaConsultComponent,
    ConstructionCostComponent,
    AgreementComponent,
    AgreementFormComponent
  ],
  providers: [
    CurrencyPipe
  ],
  entryComponents: [
    ConstructionCostComponent
  ]
})
export class ComponentsModule { }
