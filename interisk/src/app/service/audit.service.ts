import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../service/auth.service';
import { Audit,Photo } from './audit.interface';
import { Template } from './template.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class AuditService {
    private id: number;
    private headers = new Headers({ 'Authorization': 'JWT ' + this.authService.token, 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private apiUrl = environment.apiUrl;
    private auditUrl = this.apiUrl + 'audit';
    private photoUrl = this.auditUrl + '/photo';
    constructor(private http: Http, private authService: AuthService) { console.log('[audit service constructor visited]');}

    getAudits(email: string): Promise<Audit[]> {
        return this.http.get(this.auditUrl + `?email=${email}`, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getAudit(id: number): Observable<Audit> {
        console.log('[audit service get audit visited]');
        const url = `${this.auditUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPhotos(id: string): Promise<Photo[]> {
        const url = `${this.photoUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.auditUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    create(template: Template): Promise<any> {
        console.log("input");
        console.log(template);
        return this.http
            .post(this.auditUrl, JSON.stringify(template), { headers: this.headers })
            .toPromise()
            .then(res => { console.log(res.json()); return res.json(); })
            .catch(this.handleError);
    }
    update(audit: Audit): Promise<Audit> {
        const url = `${this.auditUrl}/${audit.id}`;
        return this.http
            .put(url, JSON.stringify(audit), { headers: this.headers })
            .toPromise()
            .then(() => audit)
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
