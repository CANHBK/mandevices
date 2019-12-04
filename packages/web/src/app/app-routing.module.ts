import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeModule} from "projects/home/src/app/app.module"

const routes: Routes = [
  {
    path:'',
    loadChildren: '../../projects/home/src/app/app.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
