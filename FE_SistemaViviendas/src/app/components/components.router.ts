import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipologiasComponent } from './tipologias/tipologias.component';
import { TipologiaFormComponent } from './tipologias/tipologia-form/tipologia-form.component';
import { TipologiaConsultComponent } from './tipologias/tipologia-consult/tipologia-consult.component';
import { AgreementComponent } from './agreement/agreement.component';
import { AgreementFormComponent } from './agreement/agreement-form/agreement-form.component';
import { AgreementConsultComponent } from './agreement/agreement-consult/agreement-consult.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
            {path: 'tipologias', component: TipologiasComponent, data: { title: 'Tipologías' }},
            {path: 'tipologias/create', component: TipologiaFormComponent, data: { title: 'Crear Tipologías' }},
            {path: 'tipologias/edit/:id', component: TipologiaFormComponent, data: { title: 'Editar Tipologías' }},
            {path: 'tipologias/consult/:id', component: TipologiaConsultComponent, data: { title: 'Tipología' }},

            {path: 'agreement', component: AgreementComponent, data: { title: 'Convenios' }},
            {path: 'agreement/create', component: AgreementFormComponent, data: { title: 'Crear Tipologías' }},
            {path: 'agreement/edit/:id', component: AgreementFormComponent, data: { title: 'Editar Tipologías' }},
            {path: 'agreement/consult/:id', component: AgreementConsultComponent, data: { title: 'Tipología' }},
            
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        ]
    }
];

export const COMPONENTS_ROUTES = RouterModule.forChild(routes);
