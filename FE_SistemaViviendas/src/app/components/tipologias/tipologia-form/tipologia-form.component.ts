import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export class formHabitaciones {
  label: string;
  m2: number;
  precio: number;
}

@Component({
  selector: 'app-tipologia-form',
  templateUrl: './tipologia-form.component.html',
  styleUrls: ['./tipologia-form.component.scss']
})
export class TipologiaFormComponent implements OnInit {

  cantMax: number;
  habitaciones = new Array<string>();

  constructor(private _activatedRoute: ActivatedRoute,
              private _location: Location,) { }

  ngOnInit() {
  }

  select() {
   
    this.habitaciones = [];
    for (let i = 0; i < this.cantMax; i++) {
      
      let label = this.getLabel(i); 

      this.habitaciones.push(label);
    }
  }

  getLabel(i) {
    
    let label: string
    switch (i) {
      case 0: 
        label = 'Monoambiente';
        break

      case 1: 
        label = '1 habitación';
        break
      
      case 2: 
        label = '2 habitaciones';
        break

      case 3: 
        label = '3 habitaciones';
        break
    }

    return label;
  }

  save() {
    
  }

  close() {
    this._location.back();
  }
}
