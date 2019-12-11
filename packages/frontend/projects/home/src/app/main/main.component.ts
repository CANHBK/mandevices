import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../vendors/src/lib/user.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getCurrentUser('network-only').subscribe(data => console.log(data), error => console.log(error));
    }

}
