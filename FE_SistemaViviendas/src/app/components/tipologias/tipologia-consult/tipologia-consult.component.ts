import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-reducer';
import { TipologiaModel } from '../models/tipologia.model';

@Component({
  selector: 'app-tipologia-consult',
  templateUrl: './tipologia-consult.component.html',
  styleUrls: ['./tipologia-consult.component.scss']
})
export class TipologiaConsultComponent implements OnInit {

  id: string;
  tipologia: TipologiaModel;

  constructor(private _location: Location,
              private _activateRoute: ActivatedRoute,
              private _store: Store<AppState>) { }

  ngOnInit() {

    this._activateRoute.params.subscribe(params => {
      this.id = params.id;
    });

    if(this.id) {
      this._store.select('tipologias').subscribe(resp => {
        this.tipologia = resp.find(x => x.id == this.id);
        console.log("Tipologia",this.tipologia.detalle);
      });
    }
  }

  close() {
    this._location.back();
  }

}
