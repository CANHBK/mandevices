import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  onLogout = () => {
    this.userService.logout().subscribe(() => this.router.navigate(['authentication']));
  }

}
