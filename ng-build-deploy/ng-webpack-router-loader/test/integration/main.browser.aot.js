"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Angular bootstraping
 */
var platform_browser_1 = require("@angular/platform-browser");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_module_ngfactory_1 = require("../../__codegen__/test/integration/app/app.module.ngfactory");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_1.platformBrowser()
        .bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}
exports.bootstrapDomReady = bootstrapDomReady;
bootstrapDomReady();
