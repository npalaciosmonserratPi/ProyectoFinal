import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlService } from '../../config/config';
import { TipologiaModel } from './models/tipologia.model';

@Injectable({
  providedIn: 'root'
})
export class TipologiasService {

  private url = urlService;

  constructor( private _http: HttpClient) { }

  getTipologies() {
    return this._http.post(`${this.url}/'tipologia/get'`, {});
  }

  createTipology(tipology: TipologiaModel) {
    console.log("tipologia a crear", tipology);

    return this._http.post(`${this.url}/'tipologia/create'`, tipology);
  }

  editTipology(id: string) {
    return this._http.post(`${this.url}/'tipologia/edit'`, id);

  }

  annulTipology(id: string) {
    return this._http.post(`${this.url}/'tipologia/annul'`, id);
  }
  
}
