import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewModule } from './modules/image-view/image-view.module';

const routes: Routes = [
  {path:"image",
  loadChildren: () =>
  import("./modules/image-view/image-view.module").then((m)=>ImageViewModule)
},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
