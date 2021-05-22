import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router,
              private _authService: AuthService ) { }

  canActivate() {

    if(this._authService.isLogged()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
