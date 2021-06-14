import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, Location } from '@angular/common';
import { SupCubiertaModel, TipologiaModel } from '../models/tipologia.model';
import { TipologiasService } from '../tipologias.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app-reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../../common/reducer/ui.accions';
import * as alerts from '../../../common/alert/alert';


@Component({
  selector: 'app-tipologia-form',
  templateUrl: './tipologia-form.component.html',
  styleUrls: ['./tipologia-form.component.scss']
})
export class TipologiaFormComponent implements OnInit {

  editorStyle = { 
    height: '400px',
    backgroundColor: '#ffff',
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
     // [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
    ]
  };

  id: string;
  tipologia = new TipologiaModel();

  constructor(private _activatedRoute: ActivatedRoute,
              private _location: Location,
              private _currencyPipe: CurrencyPipe,
              private _tipologyService: TipologiasService,
              private _store: Store<AppState>) {
               }

  ngOnInit() {
    this.tipologia.detalle = new Array<SupCubiertaModel>();

    this._activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  select() {
    this.tipologia.detalle = new Array<SupCubiertaModel>();

    for (let i = 0; i < this.tipologia.cantMaxHabitaciones; i++) {
      
      let detalle = new SupCubiertaModel()
      detalle.name = this.getLabel(i); 
      detalle.supCubierta = '';

      this.tipologia.detalle.push(detalle);
    }
  }
  uploadImg(e) {
    this.tipologia.fotos = e;
  }

  uploadPlano(e) {
    this.tipologia.planos = e;
  }

  save() {
    this._store.dispatch(new ActivarLoadingAction);
    this._tipologyService.createTipology(this.tipologia).subscribe((resp) => {

      alerts.SuccesMessage('Tipología creada con éxito.');
      this._store.dispatch(new DesactivarLoadingAction);
      this._location.back();

    }, error => {
      alerts.ErrorMessage('Error al crear tipología');
      this._store.dispatch(new DesactivarLoadingAction);
    })
  }

  setFormat() {
    this.tipologia.costom2Cubierto = this._currencyPipe.transform(this.tipologia.costom2Cubierto, '$ ');
  }

  close() {
    this._location.back();
  }

  /** PRIVATE */

  private getLabel(i) {
    let label: string

    switch (i) {
      case 0: 
        label = 'Vivienda Monoambiente';
        break
      case 1: 
        label = 'Vivienda de 1 habitación';
        break
      case 2: 
        label = 'Vivienda de 2 habitaciones';
        break
      case 3: 
        label = 'Vivienda de 3 habitaciones';
        break
    }

    return label;
  }
}
