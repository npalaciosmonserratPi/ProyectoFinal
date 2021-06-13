import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import * as alert from '../../common/alert/alert';
import { TipologiaModel } from './models/tipologia.model';
import { TipologiasService } from './tipologias.service';
import { EliminarTipologiaAction } from '../../common/reducer/tipologia.accions';

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
    alert.ConfirmAlert('Anular tipología', 'Esta seguro de anluar la tipología', 'Suspender', 'Cancelar').then(result => {
      if(result.isConfirmed) {
        this._store.dispatch(new EliminarTipologiaAction(id));
        console.log(this.tipologyList)
      }
    })
  }

  habilitar(id: string) {
    alert.ConfirmAlert('Habilitar tipología', 'Esta seguro de habilitar la tipología', 'Habilitar', 'Cancelar').then(result => {
      if(result.isConfirmed) {
        
      }
    })
  }

  consult(id: string) {
    this._router.navigate(['./consult', id], {relativeTo: this._activatedRoute})
  }

}
