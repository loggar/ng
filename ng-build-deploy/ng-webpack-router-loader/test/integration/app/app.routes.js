"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("./home");
var about_1 = require("./about");
var no_content_1 = require("./no-content");
exports.ROUTES = [
    { path: '', component: home_1.HomeComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'about', component: about_1.AboutComponent },
    { path: 'detail', loadChildren: './+detail#DetailModule' },
    { path: '**', component: no_content_1.NoContentComponent },
];
