"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
exports.AUTH_PROVIDERS = [
    { provide: AuthService, useClass: AuthService }
];
