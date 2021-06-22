import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ImageModel } from '../upload-file/upload-image/upload-image.model';
import { ImageComponent } from './image/image.component';

@Component({ 
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input() image: Array<ImageModel>;

  ngbModalOptions: NgbModalOptions = {
    windowClass: 'modal animate__animated animate__fadeInDown',
    backdrop: 'static',
    keyboard: false,
    size: 'lg',
  };
  
  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  openImage(url) {
    const modal = this._modalService.open(ImageComponent, this.ngbModalOptions);
    modal.componentInstance.url = url;
  }
}
