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

  }

  createTipology(tipology: TipologiaModel) {
    console.log("tipologia a crear", tipology);
    let urlCreate = this.url + '';

    return this._http.post(urlCreate, tipology);
  }
  
}
