import { Component } from '@angular/core';
import { UserService } from '@apis/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // this.userService.getCurrentUser('network-only').subscribe(
    //   user => console.log('user in app', user)
    // );
  }
}
