import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../common/reducer/ui.accions';
import * as alerts from '../../common/alert/alert';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userDto = new LoginModel();
  public isLoading: boolean;

  public userInvalid: boolean;
  public passwordInvalid: boolean;

  constructor(private _router: Router,
              private _authServise: AuthService,
              private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('ui')
          .subscribe( ui => this.isLoading = ui.isLoading );
  }

  login(f: NgForm) {

    if(!this.validarForm(f)) {
      return;
    }

    //Dispatch de accion de loading
    this._store.dispatch(new ActivarLoadingAction());

    this._authServise.login(this.userDto).subscribe((resp) => {

      this._router.navigate(['/tipologias']);
      alerts.SuccesMessage('Inicio de sesión correcto');
      this._store.dispatch(new DesactivarLoadingAction());

    }, error => {

      if(error.status != 401){
        alerts.ErrorAlert('Error', error.error.message , 'cerrar');
      }
      else {
        this.userInvalid = true;
        this.passwordInvalid = true;
      }
      
      this._store.dispatch(new DesactivarLoadingAction());
      });
  }

  validarForm(f: NgForm): boolean {
    if(!f.controls.user.valid && !f.controls.password.valid) {
      this.userInvalid = true;
      this.passwordInvalid = true;
      return false;
    }

    if(!f.controls.user.valid) {
      this.userInvalid = true;
      return false;
    }

    if(!f.controls.password.valid) {
      this.passwordInvalid = true;
      return false;
    }

    return true;
  }
}
