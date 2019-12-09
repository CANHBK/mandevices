import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AuthenticationComponent} from './authentication/authentication.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
