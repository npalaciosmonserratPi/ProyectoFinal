import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

export const APP_ROUTES = RouterModule.forRoot( routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {useHash: true})],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
