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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.message = '';
    }
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n    {{ message }}\n  </div>\n\n  <form class=\"form-inline\" *ngIf=\"!authService.getUser()\">\n    <div class=\"form-group\">\n      <label for=\"username\">User:</label>\n      <input class=\"form-control\" name=\"username\" #username>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password:</label>\n      <input class=\"form-control\" type=\"password\" name=\"password\" #password>\n    </div>\n\n    <a class=\"btn btn-default\" (click)=\"login(username.value, password.value)\">\n      Submit\n    </a>\n  </form>\n\n  <div class=\"well\" *ngIf=\"authService.getUser()\">\n    Logged in as <b>{{ authService.getUser() }}</b>\n    <a href (click)=\"logout()\">Log out</a>\n  </div>\n  "
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
