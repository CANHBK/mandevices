import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    @ViewChild('authenticationArea', {static: true}) authenticationArea: ElementRef;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.registerRedirect.subscribe(() => {
            (this.authenticationArea.nativeElement as HTMLDivElement).classList.remove('signin');
            (this.authenticationArea.nativeElement as HTMLDivElement).classList.add('signup');
        });
        this.authenticationService.loginRedirect.subscribe(() => {
            (this.authenticationArea.nativeElement as HTMLDivElement).classList.remove('signup');
            (this.authenticationArea.nativeElement as HTMLDivElement).classList.add('signin');
        });
    }

    onLoginToggle = (element: HTMLDivElement) => {
        element.classList.toggle('show');
    };

    onClickOutSide = (element: HTMLDivElement) => {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
        }
    };

}
