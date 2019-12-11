import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
