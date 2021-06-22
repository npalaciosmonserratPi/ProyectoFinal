import { PixelSpinnerModule } from 'angular-epic-spinners';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { UploadImageComponent } from './upload-file/upload-image/upload-image.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageComponent } from './image-gallery/image/image.component';
import { ComponentMaterialModule } from './material/component-material.module';

@NgModule({
  imports: [
    CommonModule,
    PixelSpinnerModule,
    ComponentMaterialModule
  ],
  declarations: [
    UploadImageComponent,
    SpinnerComponent,
    EmptyStateComponent,
    ImageGalleryComponent,
    ImageComponent
  ],
  exports: [
    ComponentMaterialModule,
    UploadImageComponent, 
    SpinnerComponent,
    EmptyStateComponent,
    ImageGalleryComponent,
    ImageComponent
  ],
  entryComponents: [
    ImageComponent
  ]
})
export class ComponentCommonModule { }
