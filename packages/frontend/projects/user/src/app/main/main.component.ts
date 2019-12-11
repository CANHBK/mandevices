import { Component, OnInit } from '@angular/core';
import { UserService } from '@apis/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getCurrentUser('network-only').subscribe(data => {
      if (!data) {
        console.log('navigate to auth')
        this.router.navigate(['authentication']);
      }
    }, error => console.log(error));
  }

}
