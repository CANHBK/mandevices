import { Component, OnInit } from '@angular/core';
import { Roles, User, UserService } from '@apis/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  Roles = Roles;
  dashboardUrl = environment.global.dashboardUrl;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

  onLogout = () => {
    this.userService.logout().subscribe(() => this.router.navigate(['authentication']));
  }

}
