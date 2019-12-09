import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    onLoginRedirect = () => {
        this.authenticationService.loginRedirect.emit();
    };

}
