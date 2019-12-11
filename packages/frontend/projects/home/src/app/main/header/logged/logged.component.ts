import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Roles, User, UserService } from '../../../../../../vendors/src/lib/user.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  @ViewChild('userMenu', { static: true }) userMenu: ElementRef;
  currentUser: User;
  Roles = Roles;
  userUrl = environment.global.userUrl;
  dashboardUrl = environment.global.dashboardUrl;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  onClickOutSideUserMenu = () => this.hideUserMenu();

  onToggleUserMenu = () => {
    (this.userMenu.nativeElement as HTMLDivElement).classList.toggle('show');
  };

  onLogout = () => {
    this.userService.logout().subscribe(data => {
      this.hideUserMenu();
    }, error => console.log(error));
  };

  hideUserMenu = () => {
    (this.userMenu.nativeElement as HTMLDivElement).classList.remove('show');
  };
}
