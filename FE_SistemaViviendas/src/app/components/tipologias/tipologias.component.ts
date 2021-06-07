import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as alert from '../../common/alert/alert';

@Component({
  selector: 'app-tipologias',
  templateUrl: './tipologias.component.html',
  styleUrls: ['./tipologias.component.scss']
})
export class TipologiasComponent implements OnInit {

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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
