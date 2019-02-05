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
// Load up Angular dependencies
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var common_2 = require("@angular/common");
var forms_1 = require("@angular/forms");
// App Container Dependencies
var intro_component_1 = require("./app/intro_component");
var sidebar_1 = require("./app/sidebar");
require("./assets");
/* tslint:disable:max-line-length */
// Individual Examples here
var ng_for_1 = require("./ng_for/ng_for");
var ng_switch_1 = require("./ng_switch/ng_switch");
var ng_style_1 = require("./ng_style/ng_style");
var ng_class_1 = require("./ng_class/ng_class");
var ng_non_bindable_1 = require("./ng_non_bindable/ng_non_bindable");
/*
 * Here's the master list of our examples for this chapter.
 */
var examples = [
    { label: 'Intro', name: 'Root', path: '', component: intro_component_1.IntroComponent },
    { label: 'NgFor', name: 'NgFor', path: 'ng_for', component: ng_for_1.NgForSampleApp },
    { label: 'NgSwitch', name: 'NgSwitch', path: 'ng_switch', component: ng_switch_1.NgSwitchSampleApp },
    { label: 'NgStyle', name: 'NgStyle', path: 'ng_style', component: ng_style_1.NgStyleSampleApp },
    { label: 'NgClass', name: 'NgClass', path: 'ng_class', component: ng_class_1.NgClassSampleApp },
    { label: 'NgNonBindable', name: 'NgNonBindable', path: 'ng_non_bindable', component: ng_non_bindable_1.NgNonBindableSampleApp },
];
/* tslint:enable:max-line-length */
// dynamically configure the router based on our ExampleDefs
var routes = examples
    .map(function (example) { return ({
    path: example.path, component: example.component, pathMatch: 'full'
}); });
var BuiltInDirectivesApp = /** @class */ (function () {
    function BuiltInDirectivesApp(router) {
        this.router = router;
        this.examples = examples; // store the outer examples
    }
    BuiltInDirectivesApp = __decorate([
        core_1.Component({
            selector: 'built-in-directives-app',
            template: "\n  <!-- Menu Bar -->\n  <div class=\"ui menu\">\n    <div class=\"ui container\">\n      <a href=\"#\" class=\"header item\">\n        <img class=\"logo\" \n             src=\"" + require('images/logos/ng-book-2-minibook.png') + "\" />\n        ng-book 2\n      </a>\n      <div class=\"header item borderless\">\n        <h1 class=\"ui header\">\n          Angular 2 Built-in Directives\n        </h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui grid container\">\n    <div class=\"four wide column\">\n      <sidebar [items]=\"examples\"></sidebar>\n    </div>\n\n    <div class=\"ui main text container eight wide column\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        })
    ], BuiltInDirectivesApp);
    return BuiltInDirectivesApp;
}());
var BuiltInDirectivesAppModule = /** @class */ (function () {
    function BuiltInDirectivesAppModule() {
    }
    BuiltInDirectivesAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                BuiltInDirectivesApp,
                intro_component_1.IntroComponent,
                sidebar_1.SidebarComponent,
                sidebar_1.SidebarItemComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes),
                forms_1.FormsModule,
                ng_for_1.NgForSampleAppModule,
                ng_switch_1.NgSwitchSampleAppModule,
                ng_style_1.NgStyleSampleAppModule,
                ng_class_1.NgClassSampleAppModule,
                ng_non_bindable_1.NgNonBindableSampleAppModule
            ],
            bootstrap: [BuiltInDirectivesApp],
            providers: [
                { provide: common_2.APP_BASE_HREF, useValue: '/' },
                { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }
            ]
        })
    ], BuiltInDirectivesAppModule);
    return BuiltInDirectivesAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(BuiltInDirectivesAppModule)
    .catch(function (err) { return console.error(err); });
