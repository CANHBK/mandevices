import {Component, OnInit} from '@angular/core';
import {Roles, UserService} from '../../../../vendors/src/lib/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userService.currentUser.subscribe(user => {
            console.log('authentication administration', user);
            if (user.role == Roles.MANAGER) {
                console.log('chuyen trang chu');
                this.router.navigate(['/']).then(result => console.log('result', result), error => console.log(error));
            }
        });
    }

}
