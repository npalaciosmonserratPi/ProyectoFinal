import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'] 
})
export class UploadFileComponent implements OnInit {

  @Output() public img = new EventEmitter<any[]>();

  imgTemp: any[] = [];

  constructor() { }

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
      reader.onloadend = () => {
        this.imgTemp.push(reader.result);

        this.img.emit(this.imgTemp);
      }
    }
  }

  delete(i) {
    this.imgTemp.splice(i, 1);
  }

}
