import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '@apis/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  rePassword: string;
  fullName: string;
  error: string;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {
  }

  onRegister = () => {
    if (this.password !== this.rePassword) {
      return this.error = 'Mật khẩu không khớp';
    }

    this.userService.register(this.email, this.password, this.fullName).subscribe(data => {
      this.authenticationService.register.emit();
      console.log(data);
    }, error => {
      this.error = error;
    });
  }
  onLoginRedirect = () => {
    this.authenticationService.loginRedirect.emit();
  };

}
