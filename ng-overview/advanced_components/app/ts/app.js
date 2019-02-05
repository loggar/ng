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
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var common_2 = require("@angular/common");
var forms_1 = require("@angular/forms");
var intro_component_1 = require("./app/intro_component");
var styling_1 = require("./styling/styling");
var host_1 = require("./host/host");
var host_01_1 = require("./host/steps/host_01");
var host_02_1 = require("./host/steps/host_02");
var host_03_1 = require("./host/steps/host_03");
var host_04_1 = require("./host/steps/host_04");
var tabs_1 = require("./tabs/tabs");
var lifecycle_01_1 = require("./lifecycle-hooks/lifecycle_01");
var lifecycle_02_1 = require("./lifecycle-hooks/lifecycle_02");
var lifecycle_03_1 = require("./lifecycle-hooks/lifecycle_03");
var lifecycle_04_1 = require("./lifecycle-hooks/lifecycle_04");
var for_1 = require("./templates/for");
var if_1 = require("./templates/if");
var content_projection_1 = require("./content-projection/content-projection");
var onpush_1 = require("./change-detection/onpush");
var observables_1 = require("./change-detection/observables");
var sidebar_1 = require("./app/sidebar");
require("./assets");
/*
 * Here's the master list of our examples for this chapter.
 */
var examples = [
    { label: 'Intro', name: 'Root', path: '', component: intro_component_1.IntroComponent },
    { label: 'Styling', name: 'Styling', path: 'styling', component: styling_1.StyleSampleApp },
    { label: 'Modifying the Host (Step 1)', name: 'Host1', path: 'host-step-1', component: host_01_1.HostSampleApp1, dev: true },
    { label: 'Modifying the Host (Step 2)', name: 'Host2', path: 'host-step-2', component: host_02_1.HostSampleApp2, dev: true },
    { label: 'Modifying the Host (Step 3)', name: 'Host3', path: 'host-step-3', component: host_03_1.HostSampleApp3, dev: true },
    { label: 'Modifying the Host (Step 4)', name: 'Host4', path: 'host-step-4', component: host_04_1.HostSampleApp4, dev: true },
    { label: 'Modifying the Host', name: 'Host', path: 'host-final', component: host_1.HostSampleApp },
    { label: 'Tabs - Component Querying', name: 'Tabs', path: 'tabs', component: tabs_1.TabsSampleApp },
    { label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1', path: 'lifecycle-hooks-1', component: lifecycle_01_1.LifecycleSampleApp1 },
    { label: 'Lifecycle 2 - OnChanges', name: 'Lifecycle2', path: 'lifecycle-hooks-2', component: lifecycle_02_1.LifecycleSampleApp2 },
    { label: 'Lifecycle 3 - Differs', name: 'Lifecycle3', path: 'lifecycle-hooks-3', component: lifecycle_03_1.LifecycleSampleApp3 },
    { label: 'Lifecycle 4 - Full', name: 'Lifecycle4', path: 'lifecycle-hooks-4', component: lifecycle_04_1.LifecycleSampleApp4 },
    { label: 'ngBookFor', name: 'NgBookFor', path: 'ng-book-for', component: for_1.ForTemplateSampleApp },
    { label: 'ngBookIf', name: 'NgBookIf', path: 'ng-book-if', component: if_1.IfTemplateSampleApp },
    { label: 'Content Projection', name: 'ContentProjection', path: 'content-projection', component: content_projection_1.ContentProjectionSampleApp },
    { label: 'Change Detection - OnPush', name: 'ChangeDetectionOnPush', path: 'change-detection-onpush', component: onpush_1.OnPushChangeDetectionSampleApp },
    { label: 'Change Detection - Observables', name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: observables_1.ObservableChangeDetectionSampleApp },
]; /* tslint:enable:max-line-length */
// dynamically configure the router based on our ExampleDefs
var routes = examples
    .map(function (example) { return ({
    path: example.path, component: example.component, pathMatch: 'full'
}); });
var AdvancedComponentsApp = /** @class */ (function () {
    function AdvancedComponentsApp(router) {
        this.router = router;
        this.examples = examples; // store the outer examples
    }
    AdvancedComponentsApp = __decorate([
        core_1.Component({
            selector: 'advanced-components-app',
            template: "\n  <!-- Menu Bar -->\n  <div class=\"ui menu\">\n    <div class=\"ui container\">\n      <a href=\"#\" class=\"header item\">\n        <img class=\"logo\" \n             src=\"" + require('images/logos/ng-book-2-minibook.png') + "\" />\n        ng-book 2\n      </a>\n      <div class=\"header item borderless\">\n        <h1 class=\"ui header\">\n          Angular 2 Advanced Components\n        </h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui grid container\">\n    <div class=\"four wide column\">\n      <sidebar [items]=\"examples\"></sidebar>\n    </div>\n\n    <div class=\"ui main text container eight wide column\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        })
    ], AdvancedComponentsApp);
    return AdvancedComponentsApp;
}());
var AdvancedComponentsAppModule = /** @class */ (function () {
    function AdvancedComponentsAppModule() {
    }
    AdvancedComponentsAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                AdvancedComponentsApp,
                intro_component_1.IntroComponent,
                content_projection_1.ContentProjectionSampleApp,
                content_projection_1.Message,
                onpush_1.OnPushChangeDetectionSampleApp,
                onpush_1.DefaultCmp,
                onpush_1.OnPushCmp,
                observables_1.ObservableChangeDetectionSampleApp,
                observables_1.ObservableCmp,
                sidebar_1.SidebarComponent,
                sidebar_1.SidebarItemComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes),
                common_1.CommonModule,
                host_1.HostSampleAppModule,
                host_01_1.HostSampleApp1Module,
                host_02_1.HostSampleApp2Module,
                host_03_1.HostSampleApp3Module,
                host_04_1.HostSampleApp4Module,
                styling_1.StyleSampleAppModule,
                lifecycle_01_1.LifecycleSampleApp1Module,
                lifecycle_02_1.LifecycleSampleApp2Module,
                lifecycle_03_1.LifecycleSampleApp3Module,
                lifecycle_04_1.LifecycleSampleApp4Module,
                tabs_1.TabsSampleAppModule,
                for_1.ForTemplateSampleAppModule,
                if_1.IfTemplateSampleAppModule,
            ],
            bootstrap: [AdvancedComponentsApp],
            providers: [
                { provide: common_2.APP_BASE_HREF, useValue: '/' },
                { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy },
            ]
        })
    ], AdvancedComponentsAppModule);
    return AdvancedComponentsAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AdvancedComponentsAppModule)
    .catch(function (err) { return console.error(err); });
