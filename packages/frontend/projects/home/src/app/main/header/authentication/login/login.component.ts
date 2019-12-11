import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
        this.userService.login(this.email, this.password).subscribe(data => {
            this.userService.getCurrentUser('network-only').subscribe();
            this.authenticationService.login.emit();
            console.log(data);
        }, error => console.log(error));
    };
}
