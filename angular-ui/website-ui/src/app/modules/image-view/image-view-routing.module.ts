import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageShowComponent } from './components/image-show/image-show.component';

const routes: Routes = [
  {path:"", component:ImageComponent , children:[
    {path:"",component:ImageShowComponent},
    {path:"upload",component:ImageUploadComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageViewRoutingModule { }
