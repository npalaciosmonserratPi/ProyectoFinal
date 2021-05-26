import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { urlService } from '../config/config';
import { LoginModel } from './models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,) { }

  login(user: LoginModel) {

    let url = urlService + 'login';

    return this.http.post(url, user).pipe(map((resp: any) => {
      this.setLocalStorage(resp.user, resp.token);
    }));
  }

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

  isLogged() {
    return sessionStorage.getItem('token') ? true : false;
  }

  getDataUser() {
    let userName = sessionStorage.getItem('user');
    return userName;
  }

  /** PRIVATE */
  private setLocalStorage( user: LoginModel, token: string) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
  }
}
