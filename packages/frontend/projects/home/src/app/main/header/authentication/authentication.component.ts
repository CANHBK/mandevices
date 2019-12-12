import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('authenticationArea', { static: true }) authenticationArea: ElementRef;
  @ViewChild('authenticationForm', { static: true }) authenticationForm: ElementRef;
  @ViewChild('content', { static: true }) modalContent: ElementRef;

  constructor(private authenticationService: AuthenticationService, private modalService: NgbModal) {
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
    this.authenticationService.login.subscribe(() => this.hideAuthenticationForm());
    this.authenticationService.register.subscribe(() => {
      this.hideAuthenticationForm();
      this.modalService.open(this.modalContent);
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

  hideAuthenticationForm = () => {
    (this.authenticationForm.nativeElement as HTMLDivElement).classList.remove('show');
  };

}
