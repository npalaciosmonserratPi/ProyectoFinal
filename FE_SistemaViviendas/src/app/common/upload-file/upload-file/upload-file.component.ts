import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { element } from 'protractor';
import { AppState } from 'src/app/app-reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../../reducer/ui.accions';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'] 
})
export class UploadFileComponent implements OnInit {

  @Output() public img = new EventEmitter<any[]>();

  imgTemp: any[] = [];

  constructor(private _store: Store<AppState>) {
    
  }

  ngOnInit() {
  }

  
  selectImage(file: FileList) {
    this._store.dispatch(new ActivarLoadingAction());

    if(!file) {
      this.imgTemp = null;
      return;
    }
    for (let index = 0; index < file.length; index++) {
      let reader = new FileReader();

      let urlImgTemp = reader.readAsDataURL(file.item(index));
      reader.onloadend = () => {
        this.imgTemp.push(reader.result);

        this.img.emit(this.imgTemp);
        this._store.dispatch(new DesactivarLoadingAction())
      }
    }
  }

  delete(i) {
    this.imgTemp.splice(i, 1);
  }

}
