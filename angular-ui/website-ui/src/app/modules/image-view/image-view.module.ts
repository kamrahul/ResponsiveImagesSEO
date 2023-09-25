import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageViewRoutingModule } from './image-view-routing.module';
import { ImageComponent } from './components/image/image.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageShowComponent } from './components/image-show/image-show.component';


@NgModule({
  declarations: [
    ImageComponent,
    ImageUploadComponent,
    ImageShowComponent
  ],
  imports: [
    CommonModule,
    ImageViewRoutingModule
  ]
})
export class ImageViewModule { }
