import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {UserService} from '../../../../../../../vendors/src/lib/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private  authenticationService: AuthenticationService, private userService: UserService) {
    }

    ngOnInit() {
    }

    onRegisterRedirect = () => {
        this.authenticationService.registerRedirect.emit();
    };

    onLogin = () => {
        this.userService.login(this.email, this.password).subscribe(data => console.log(data), error => console.log(error));
    };

}
