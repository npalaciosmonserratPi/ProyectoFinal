import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipologiasComponent } from './tipologias/tipologias.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        //canActivate: [AuthGuardService],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
            {path: 'tipologias', component: TipologiasComponent, data: { title: 'Tipologias' }},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        ]
    }
];

export const COMPONENTS_ROUTES = RouterModule.forChild(routes);
