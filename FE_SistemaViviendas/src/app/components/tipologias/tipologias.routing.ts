import { Routes, RouterModule } from '@angular/router';
import { TipologiasComponent } from './tipologias.component';
import { TipologiaFormComponent } from './tipologia-form/tipologia-form.component';
import { TipologiaConsultComponent } from './tipologia-consult/tipologia-consult.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'tipologias', component: TipologiasComponent, data: { title: 'Tipologías' }},
  {path: 'tipologias/create', component: TipologiaFormComponent, data: { title: 'Crear Tipologías' }},
  {path: 'tipologias/edit/:id', component: TipologiaFormComponent, data: { title: 'Editar Tipologías' }},
  {path: 'tipologias/consult/:id', component: TipologiaConsultComponent, data: { title: 'Tipología' }},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipologiasRoutes { }