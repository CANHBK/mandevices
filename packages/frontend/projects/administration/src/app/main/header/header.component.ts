import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@apis/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  userUrl = environment.global.userUrl;
  homeUrl = environment.global.homeUrl;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      console.log('user in header', user);
      this.currentUser = user;
    });
  }

  onLogout = () => {
    this.userService.logout().subscribe(() => this.router.navigate(['authentication']
    ));
  }

}
