import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
}
