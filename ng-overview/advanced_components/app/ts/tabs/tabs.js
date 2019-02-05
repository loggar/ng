"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Tab = /** @class */ (function () {
    function Tab() {
        this.active = false;
    }
    __decorate([
        core_1.Input()
    ], Tab.prototype, "title", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "\n  <div class=\"ui bottom attached tab segment\"\n       [class.active]=\"active\">\n\n    <ng-content></ng-content>\n\n  </div>\n  "
        })
    ], Tab);
    return Tab;
}());
var Tabset = /** @class */ (function () {
    function Tabset() {
    }
    Tabset.prototype.ngAfterContentInit = function () {
        this.tabs.toArray()[0].active = true;
    };
    Tabset.prototype.setActive = function (tab) {
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(Tab)
    ], Tabset.prototype, "tabs", void 0);
    Tabset = __decorate([
        core_1.Component({
            selector: 'tabset',
            template: "\n  <div class=\"ui top attached tabular menu\">\n    <a *ngFor=\"let tab of tabs\"\n       class=\"item\"\n       [class.active]=\"tab.active\"\n       (click)=\"setActive(tab)\">\n\n      {{ tab.title }}\n\n    </a>\n  </div>\n  <ng-content></ng-content>\n  "
        })
    ], Tabset);
    return Tabset;
}());
var TabsSampleApp = /** @class */ (function () {
    function TabsSampleApp() {
        this.tabs = [
            { title: 'About', content: 'This is the About tab' },
            { title: 'Blog', content: 'This is our blog' },
            { title: 'Contact us', content: 'Contact us here' },
        ];
    }
    TabsSampleApp = __decorate([
        core_1.Component({
            selector: 'tabs-sample-app',
            template: "\n  <tabset>\n    <tab title=\"First tab\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n      Quibusdam magni quia ut harum facilis, ullam deleniti porro\n      dignissimos quasi at molestiae sapiente natus, neque voluptatum\n      ad consequuntur cupiditate nemo sunt.\n    </tab>\n    <tab *ngFor=\"let tab of tabs\" [title]=\"tab.title\">\n      {{ tab.content }}\n    </tab>\n  </tabset>\n  "
        })
    ], TabsSampleApp);
    return TabsSampleApp;
}());
exports.TabsSampleApp = TabsSampleApp;
var TabsSampleAppModule = /** @class */ (function () {
    function TabsSampleAppModule() {
    }
    TabsSampleAppModule = __decorate([
        core_1.NgModule({
            declarations: [
                TabsSampleApp,
                Tabset,
                Tab
            ],
            imports: [common_1.CommonModule],
            exports: [TabsSampleApp]
        })
    ], TabsSampleAppModule);
    return TabsSampleAppModule;
}());
exports.TabsSampleAppModule = TabsSampleAppModule;
