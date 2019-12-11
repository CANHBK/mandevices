import { Component } from '@angular/core';
import { UserService } from '@apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fetchedUser = false;
  constructor(private userService: UserService, private  router: Router) {
    this.userService.getCurrentUser('network-only').subscribe(user => {
      this.fetchedUser = true;
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['authentication']);
      }
    })
  }

}
