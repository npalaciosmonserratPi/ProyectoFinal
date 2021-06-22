import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ComponentMaterialModule { }
