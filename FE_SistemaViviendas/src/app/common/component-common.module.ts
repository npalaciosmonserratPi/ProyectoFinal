import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [
    UploadFileComponent,
    SpinnerComponent,
    EmptyStateComponent
  ],
  exports: [
    UploadFileComponent,
    SpinnerComponent,
    EmptyStateComponent
  ]
})
export class ComponentCommonModule { }
