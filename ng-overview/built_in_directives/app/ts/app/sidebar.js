"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var core_1 = require("@angular/core");
/*
 * SidebarItemComponent
 *
 * Defines a single item in the sidebar. Links to the designated component and
 * marks the current item as active.
 *
 */
var SidebarItemComponent = /** @class */ (function () {
    function SidebarItemComponent(router, route, location) {
        this.router = router;
        this.route = route;
        this.location = location;
    }
    // Checks if this current example is the selected one
    SidebarItemComponent.prototype.isActive = function () {
        return "/" + this.item.path === this.location.path();
    };
    __decorate([
        core_1.Input('item')
    ], SidebarItemComponent.prototype, "item", void 0);
    SidebarItemComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-item',
            template: "\n<a class=\"item\" \n  [ngClass]=\"{ active: isActive() }\"\n  [routerLink]=\"[item.path]\">\n  {{ item.label }}\n</a>\n  "
        })
    ], SidebarItemComponent);
    return SidebarItemComponent;
}());
exports.SidebarItemComponent = SidebarItemComponent;
/*
 * SidebarComponent
 *
 * Given a list of ExampleDefs, creates a sidebar for those items.
 *
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    __decorate([
        core_1.Input('items')
    ], SidebarComponent.prototype, "items", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n<div class=\"ui vertical pointing menu\">\n  <sidebar-item \n    [item]=\"item\"\n    *ngFor=\"let item of items\">\n    </sidebar-item>\n</div>\n  "
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
