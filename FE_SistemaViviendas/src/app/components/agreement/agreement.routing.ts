import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgreementComponent } from './agreement.component';
import { AgreementFormComponent } from './agreement-form/agreement-form.component';
import { AgreementConsultComponent } from './agreement-consult/agreement-consult.component';

const routes: Routes = [
  {path: 'agreement', component: AgreementComponent, data: { title: 'Convenios' }},
  {path: 'agreement/create', component: AgreementFormComponent, data: { title: 'Crear Tipologías' }},
  {path: 'agreement/edit/:id', component: AgreementFormComponent, data: { title: 'Editar Tipologías' }},
  {path: 'agreement/consult/:id', component: AgreementConsultComponent, data: { title: 'Tipología' }},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementRoutes { }