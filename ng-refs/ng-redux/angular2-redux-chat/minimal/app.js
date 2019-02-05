"use strict";
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var redux_1 = require("redux");
var counter_reducer_1 = require("./counter-reducer");
var app_store_1 = require("./app-store");
var CounterComponent_1 = require("./CounterComponent");
var devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
var store = redux_1.createStore(counter_reducer_1.counterReducer, devtools);
var CounterApp = /** @class */ (function () {
    function CounterApp() {
    }
    CounterApp = __decorate([
        core_1.Component({
            selector: 'minimal-redux-app',
            template: "\n  <div>\n    <counter-component>\n    </counter-component>\n  </div>\n  "
        })
    ], CounterApp);
    return CounterApp;
}());
var CounterAppAppModule = /** @class */ (function () {
    function CounterAppAppModule() {
    }
    CounterAppAppModule = __decorate([
        core_2.NgModule({
            declarations: [
                CounterApp,
                CounterComponent_1.default
            ],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [CounterApp],
            providers: [
                { provide: app_store_1.AppStore, useValue: store }
            ]
        })
    ], CounterAppAppModule);
    return CounterAppAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(CounterAppAppModule)
    .catch(function (err) { return console.error(err); });
// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
// require('../app/ts/vendor');
require('./app-store');
require('./app-state');
require('./counter-reducer');
require('./counter-action-creators');
require('./CounterComponent');
