import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../service/common.interface';
import { CommonService } from '../service/common.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public user: User;
  public temp: any;
  private apiUrl = environment.apiUrl;

  constructor(public authService: AuthService
    , public router: Router
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getCommonPromise().then(common =>{
      console.log('[print common in menu]');
      console.log(common.user.name);
      //this.user.name = common.user.name
      this.user = common.user;
      this.temp = this.apiUrl + 'images/logo' + this.user.accountId + '.gif';
    })    
  }

  logout() {
    this.authService.logout();    
    this.router.navigate(['/login']);
  }

}
