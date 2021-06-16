import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() url: string;

  constructor(private _ngbmodal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this._ngbmodal.close();
  }
}
