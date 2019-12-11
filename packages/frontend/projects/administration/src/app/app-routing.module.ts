import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from '../../../vendors/src/lib/auth.guard';
import { Roles } from '../../../vendors/src/lib/user.service';
import { LoginComponent } from './authentication/login/login.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountListComponent } from './pages/accounts/account-list/account-list.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { roles: [Roles.MANAGER] },
    children: [
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [
          {
            path: 'list',
            component: AccountListComponent
          },
          {
            path: '**', redirectTo: 'list'
          }
        ]
      }

    ]
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
