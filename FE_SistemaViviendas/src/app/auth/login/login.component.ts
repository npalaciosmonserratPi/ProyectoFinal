import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userDto = new LoginModel();

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userDto)
    this._router.navigate(['./dashboard'])
  }

}
