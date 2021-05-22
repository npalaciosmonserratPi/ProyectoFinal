import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showConfigMenu: boolean = false;

  constructor(private _authService: AuthService,
            private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout(); 
    this.router.navigate(['./login']);
  }
}
