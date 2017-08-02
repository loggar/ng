import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthService } from '../service/auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class EdgeService {
    private headers = new Headers({ 'Authorization': 'JWT ' + this.authService.token, 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private apiUrl = environment.apiUrl;
    private transferUrl = this.apiUrl + 'edge';

    constructor(private http: Http, private authService: AuthService) { }

    transfer(id: number): Promise<any> {
        const url = `${this.transferUrl}/${id}`;
        console.log("transfer");
        return this.http
            .post(url, { headers: this.headers })
            .toPromise()
            .then(res => { console.log(res.json()); return res.json(); })
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