import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-construction-cost',
  templateUrl: './construction-cost.component.html',
  styleUrls: ['./construction-cost.component.scss']
})
export class ConstructionCostComponent implements OnInit {

  costoCubierto: string;
  costoSemiCubierto: string;

  constructor(public _dialogRef: MatDialogRef<ConstructionCostComponent>,
              ) { }

  ngOnInit() {
  }

  close() {
    this._dialogRef.close();
  }
}
