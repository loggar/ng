import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Common, Site, User } from './common.interface';
import { AuthService } from '../service/auth.service';

@Injectable()
export class CommonService {    
    //private headers = new Headers({ 'Authorization': 'JWT ' + this.authService.token, 'Content-Type': 'application/json' });
    //private options = new RequestOptions({ headers: this.headers })    
    private options;
    private apiUrl = environment.apiUrl;
    private commonUrl = this.apiUrl + 'common';  // URL to web api
    private siteUrl = this.commonUrl + '/site';  // URL to web api

    sites: Site[];
    user: User;

    constructor(private http: Http, private authService: AuthService) {
        //this.getCommon(); 
        // if you use it here, it can get user token from before!!!!!!!
    }

    getCommon() {
        console.log('[getSites][commonService visited]');
        console.log(this.authService.token);
        //let data = { 'email': this.user.email };
        const url = `${this.commonUrl}`;
        if (this.sites && this.user) {
            console.log(this.sites);
        } else {
            this.options = new RequestOptions({ headers: new Headers({ 'Authorization': 'JWT ' + this.authService.token, 'Content-Type': 'application/json' }) });
            this.http.get(url, this.options)
                .toPromise()
                .then(res => {
                    let body = res.json();
                    this.sites = body.site;
                    this.user = body.user;
                    console.log('[getSites][commonService ended]');
                    console.log(this.sites);
                    console.log(this.user);
                })
                .catch(this.handleError);
        }
    }

    getCommonPromise(): Promise<Common> {
        const url = `${this.commonUrl}`;
        console.log('[getCommonPromise visited][below is user token]')
        console.log(this.authService.token);        
        this.options = new RequestOptions({ headers: new Headers({ 'Authorization': 'JWT ' + this.authService.token, 'Content-Type': 'application/json' }) });
        console.log('[getCommonPromise visited][below is second this.options]')
        console.log(this.options.headers);
        return this.http.get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }



    getCommon00(id: number): Observable<Site> {
        const url = `${this.commonUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || [];
    }
}
