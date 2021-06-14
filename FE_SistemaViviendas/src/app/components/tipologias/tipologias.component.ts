import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import * as alert from '../../common/alert/alert';
import { TipologiaModel } from './models/tipologia.model';
import { TipologiasService } from './tipologias.service';
import { SuspenderTipologiaAction, HabilitarTipologiaAction } from '../../common/reducer/tipologia.accions';

@Component({
  selector: 'app-tipologias',
  templateUrl: './tipologias.component.html',
  styleUrls: ['./tipologias.component.scss']
})
export class TipologiasComponent implements OnInit {

  tipologyList = new Array<TipologiaModel>();

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _tipologyService: TipologiasService,
              private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select('tipologias').subscribe(resp => {
      console.log(resp)
      this.tipologyList = resp;
    })
  }

  getTipologies() {
    this._tipologyService.getTipologies().subscribe((resp) => {
    });
  }

  add() {
    this._router.navigate(['./create'], {relativeTo: this._activatedRoute}); 
  }

  edit(id: string) {
    this._router.navigate(['./edit', id], {relativeTo: this._activatedRoute});
  }

  annul(id: string) {
    alert.ConfirmAlert('Suspender tipología', 'Esta seguro de suspender la tipología', 'Suspender', 'Cancelar').then(result => {
      if(result.isConfirmed) {
        this._store.dispatch(new SuspenderTipologiaAction(id));
      }
    })
  }

  habilitar(id: string) {
    alert.ConfirmAlert('Habilitar tipología', 'Esta seguro de habilitar la tipología', 'Habilitar', 'Cancelar').then(result => {
      if(result.isConfirmed) {
        this._store.dispatch(new HabilitarTipologiaAction(id));
      }
    })
  }

  consult(id: string) {
    this._router.navigate(['./consult', id], {relativeTo: this._activatedRoute})
  }

}
