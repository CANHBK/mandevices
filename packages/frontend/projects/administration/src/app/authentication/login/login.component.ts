import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../vendors/src/lib/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    onLogin = () => {
        this.userService.login(this.email, this.password).subscribe(() => {
            this.userService.getCurrentUser('network-only').subscribe(data=>console.log('administration',data));
        });
    };
}
