import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { element, logging } from 'protractor';
import { AppState } from 'src/app/app-reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../reducer/ui.accions';
import { ImageModel } from './upload-image.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'] 
})
export class UploadImageComponent implements OnInit {

  @Output() public listImg = new EventEmitter<any[]>();
  @Input() public OnSetPrincipal: boolean = false;

  imgTemp: ImageModel[] = [];

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
  }

  selectImage(file: FileList) {
    if(!file) {
      this.imgTemp = null;
      return;
    }

    for (let index = 0; index < file.length; index++) {
      let reader = new FileReader();
      let urlImgTemp = reader.readAsDataURL(file.item(index));

      reader.onloadstart = () => {
        this._store.dispatch(new ActivarLoadingAction());
      }
      reader.onloadend = () => {
        let image = new ImageModel();
        image.url = reader.result;
        image.isPricipal = false;

        this.imgTemp.push(image);

        if(this.OnSetPrincipal) {
          this.imgTemp[0].isPricipal = true;
        }

        this.listImg.emit(this.imgTemp);

        this._store.dispatch(new DesactivarLoadingAction())
      }
    }
  }
  
  setPrincipal(img: ImageModel) {

    this.imgTemp.map( x => x.isPricipal = false);

    let exist = this.imgTemp.find(x => x == img);
    exist.isPricipal = !exist.isPricipal;
    this.listImg.emit(this.imgTemp);
  }

  delete(i) {
    this.imgTemp.splice(i, 1);
    if( this.OnSetPrincipal && (!this.imgTemp.some( x => x.isPricipal) && this.imgTemp.length > 0)) {
      this.imgTemp[0].isPricipal = true;
    }
    this.listImg.emit(this.imgTemp);
  }

}
