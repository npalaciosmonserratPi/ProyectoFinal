import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipologia-consult',
  templateUrl: './tipologia-consult.component.html',
  styleUrls: ['./tipologia-consult.component.scss']
})
export class TipologiaConsultComponent implements OnInit {

  id: string;

  constructor(private _location: Location,
              private _activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activateRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  close() {
    this._location.back();
  }

}
