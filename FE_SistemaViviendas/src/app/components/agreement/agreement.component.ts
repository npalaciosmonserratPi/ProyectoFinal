import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  constructor(private _route: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  add() {
    this._route.navigate(['./create'], {relativeTo: this._activatedRoute})
  }

}
