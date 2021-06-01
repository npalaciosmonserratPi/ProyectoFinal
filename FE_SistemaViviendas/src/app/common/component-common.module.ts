import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    UploadFileComponent,
    SpinnerComponent,
  ],
  exports: [
    UploadFileComponent,
    SpinnerComponent
  ]
})
export class ComponentCommonModule { }
