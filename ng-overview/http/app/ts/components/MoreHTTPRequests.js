"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var MoreHTTPRequests = /** @class */ (function () {
    function MoreHTTPRequests(http) {
        this.http = http;
    }
    MoreHTTPRequests.prototype.makePost = function () {
        var _this = this;
        this.loading = true;
        this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({
            body: 'bar',
            title: 'foo',
            userId: 1
        }))
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    MoreHTTPRequests.prototype.makeDelete = function () {
        var _this = this;
        this.loading = true;
        this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    MoreHTTPRequests.prototype.makeHeaders = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('X-API-TOKEN', 'ng-book');
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    MoreHTTPRequests = __decorate([
        core_1.Component({
            selector: 'more-http',
            template: "\n  <h2>More Requests</h2>\n  <button type=\"button\" (click)=\"makePost()\">Make Post</button>\n  <button type=\"button\" (click)=\"makeDelete()\">Make Delete</button>\n  <button type=\"button\" (click)=\"makeHeaders()\">Make Headers</button>\n  <div *ngIf=\"loading\">loading...</div>\n  <pre>{{data | json}}</pre>\n"
        })
    ], MoreHTTPRequests);
    return MoreHTTPRequests;
}());
exports.MoreHTTPRequests = MoreHTTPRequests;
