import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../vendors/src/lib/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    currentUser: any;

    constructor(private userService: UserService, private  cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.userService.currentUser.subscribe(user => {
                this.currentUser = user;
                this.cdr.detectChanges();
                console.log('header', this.currentUser);
            }
        );

    }

}
