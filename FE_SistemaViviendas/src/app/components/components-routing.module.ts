import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { NgModule } from '@angular/core';
import { TipologiasRoutes } from './tipologias/tipologias.routing';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
            {
              path: '', loadChildren: () =>
                import('./tipologias/tipologias.routing').then(m => m.TipologiasRoutes)
            },
            {
              path: '', loadChildren: () =>
                import('./agreement/agreement.routing').then(m => m.AgreementRoutes)
            },
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        ]
    }
];


export const COMPONENTS_ROUTES = RouterModule.forChild(routes)
