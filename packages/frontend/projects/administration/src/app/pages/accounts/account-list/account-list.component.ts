import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@apis/user.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(users => this.users = users);
  }

}
