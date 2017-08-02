import { Injectable } from '@angular/core';

import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { User } from './user.interface';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    username: string;
    user: User;
    private apiUrl = environment.apiUrl;
    public token: string;
    //public headers;
    

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http) {
        console.log('[auth service constructor visited]');
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser;
        //this.headers  = new Headers({ 'Authorization': 'JWT ' + this.token, 'Content-Type': 'application/json' });
     }
/*    
    logout(): void {
        this.isLoggedIn = false;
        this.user = null;
        localStorage.removeItem('currentUser')
    }

    login(username: string, password: string) {
        let data = new URLSearchParams();
        data.append('email', username);
        data.append('password', password);
        return this.http
            .post(this.apiUrl + 'login', data)
            .toPromise()
            .then(res => {
                let body = res.json();
                if (body.success === true) {
                    this.isLoggedIn = true;                    
                    this.username = username;
                    this.user = body.loginUser;
                    localStorage.setItem('currentUser', JSON.stringify(this.user));
                }
                return body.data || {};
            })
            .catch(this.handleError);
    }
*/
    private handleError(error: Response | any) {
        //use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    login(username: string, password: string) {
          return this.http.post(this.apiUrl + 'login', { email: username, password: password })
            .toPromise()                
              .then((response: Response) => {
                  // login successful if there's a jwt token in the response
                  let user = response.json();
                  if (user && user.token) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
                      this.token = user.token;
                      console.log(this.token);
                      localStorage.setItem('currentUser', JSON.stringify(user.token));
                      //this.headers  = new Headers({ 'Authorization': 'JWT ' + this.token, 'Content-Type': 'application/json' });
                      return true;
                  } else {
                      return false;
                  }
              });
      }
  
      logout() {
          // remove user from local storage to log user out
          this.token = null;
          localStorage.removeItem('currentUser');
          //this.headers = null;
      }

}
