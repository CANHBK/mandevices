import { Component } from '@angular/core';
import {UserService} from '../../../vendors/src/lib/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'administration';
  constructor(private userService: UserService) {
    this.userService.getCurrentUser('network-only').subscribe(
        user=>console.log('user in app',user)
    );
  }
}
