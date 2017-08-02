import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonService } from '../service/common.service';
import { Message } from '../service/message.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  message: string;
  errorMessage: string;
  msgs: Message[] = [];

  constructor(public authService: AuthService,
    public router: Router,
    public commonService: CommonService) {
    this.setMessage();
  }

  ngOnInit() {
    this.authService.logout();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.model.username, this.model.password)
      .then(results => {
        this.setMessage();
        console.log('success login');
        if (results === true) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default

          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        } else {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'ERROR', detail:'User/Password Not Matching'});
          let redirect = '/login'
          let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }

      })
      //.then(() => this.getSites())
      .catch((error) => this.errorMessage = <any>error);
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  getSites(): void {
    this.commonService.getCommon();
  }

}
