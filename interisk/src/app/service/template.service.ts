import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../environments/environment';
import { Template } from './template.interface';

@Injectable()
export class TemplateService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = environment.apiUrl;
    private templateUrl = this.apiUrl + 'template';  // URL to web api
    constructor(private http: Http) {console.log('[template service constructor visited]'); }

    getTemplates01(): Promise<Template[]> {
        return this.http.get(this.templateUrl)
            .toPromise()
            .then(response => response.json().data as Template[])
            .catch(this.handleError);
    }
    getTemplates02(): Promise<Template[]> {
        return this.http.get(this.templateUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getTemplates(email:string): Promise<Template[]> {
        const url = `${this.templateUrl}?email=${email}`;
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getTemplate(id: number): Observable<Template> {
        const url = `${this.templateUrl}/${id}`;   
        return this.http.get(url)            
            .map(this.extractData)
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.templateUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    create(template: Template): Promise<Template> {
        return this.http
            .post(this.templateUrl, JSON.stringify(template), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    update(template: Template): Promise<Template> {
        const url = `${this.templateUrl}/${template.id}`;
        return this.http
            .put(url, JSON.stringify(template), { headers: this.headers })
            .toPromise()
            .then(() => template)
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
