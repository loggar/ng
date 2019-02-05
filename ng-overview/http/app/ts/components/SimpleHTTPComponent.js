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
var SimpleHTTPComponent = /** @class */ (function () {
    function SimpleHTTPComponent(http) {
        this.http = http;
    }
    SimpleHTTPComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    SimpleHTTPComponent = __decorate([
        core_1.Component({
            selector: 'simple-http',
            template: "\n  <h2>Basic Request</h2>\n  <button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n  <div *ngIf=\"loading\">loading...</div>\n  <pre>{{data | json}}</pre>\n"
        })
    ], SimpleHTTPComponent);
    return SimpleHTTPComponent;
}());
exports.SimpleHTTPComponent = SimpleHTTPComponent;
