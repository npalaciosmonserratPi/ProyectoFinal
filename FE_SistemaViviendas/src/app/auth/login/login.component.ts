import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../common/reducer/ui.accions';
import * as alerts from '../../common/alert/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userDto = new LoginModel();
  public isLoading: boolean;

  constructor(private _router: Router,
              private _authServise: AuthService,
              private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('ui')
          .subscribe( ui => this.isLoading = ui.isLoading );
  }

  login() {
    //Dispatch de accion de loading
     this._store.dispatch(new ActivarLoadingAction());

     this._authServise.login(this.userDto).subscribe((resp) => {

       this._router.navigate(['/dashboard']);
       alerts.SuccesMessage('Inicio de sesión correcto');
       this._store.dispatch(new DesactivarLoadingAction());

     }, error => {

      alerts.ErrorAlert('Error', error.statusText , 'cerrar');
       this._store.dispatch(new DesactivarLoadingAction());
     });
  }

}
