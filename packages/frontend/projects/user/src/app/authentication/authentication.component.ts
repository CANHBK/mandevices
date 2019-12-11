import { Component, OnInit } from '@angular/core';
import { UserService } from '@apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      if (data) {
        this.router.navigate(['/']);
      }
    });
  }

}
