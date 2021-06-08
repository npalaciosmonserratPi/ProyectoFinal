import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as alert from '../../common/alert/alert';
import { TipologiaModel } from './models/tipologia.model';
import { TipologiasService } from './tipologias.service';

@Component({
  selector: 'app-tipologias',
  templateUrl: './tipologias.component.html',
  styleUrls: ['./tipologias.component.scss']
})
export class TipologiasComponent implements OnInit {

  tipologyList = new Array<TipologiaModel>();

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _tipologyService: TipologiasService) { }

  ngOnInit() {
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

  annul() {
    alert.ConfirmAlert('Anular tipología', 'Esta seguro de anluar la tipolodía', 'Anular', 'Cancelar').then(result => {
      if(result.isConfirmed) {

      }
    })
  }

  consult(id: string) {
    this._router.navigate(['./consult', id], {relativeTo: this._activatedRoute})
  }

}
