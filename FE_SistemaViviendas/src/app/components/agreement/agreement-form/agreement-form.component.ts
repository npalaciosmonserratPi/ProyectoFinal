import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agreement-form',
  templateUrl: './agreement-form.component.html',
  styleUrls: ['./agreement-form.component.scss']
})
export class AgreementFormComponent implements OnInit {

  id: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _location: Location,) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  close() {
    this._location.back();
  }

}
