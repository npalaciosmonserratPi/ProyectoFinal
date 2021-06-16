import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from '../upload-file/upload-image/upload-image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  @Input() image: Array<ImageModel>;

  constructor() { }

  ngOnInit() {
  }

}
