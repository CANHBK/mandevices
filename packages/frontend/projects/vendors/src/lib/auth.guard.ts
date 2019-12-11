import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('active');
    return new Promise<boolean>(resolve => {
      console.log('currentUserValue', this.userService.currentUserValue)
      this.userService.getCurrentUser('network-only').subscribe(user => {
        console.log(user);
        console.log(route);
        if (user) {
          if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
            // role not authorised so redirect to home page
            // this.router.navigate(['/']);
            console.log('not authorization');
            this.router.navigate(['/authentication']);
            return resolve(false);
          }

          // authorised so return true
          console.log('authorised');
          return resolve(true);
        }
        console.log('navigate');
        this.router.navigate(['/authentication']);
        return resolve(false);
      }, error => console.log(error));
    });

    // console.log(currentUserValue);


  }
}
