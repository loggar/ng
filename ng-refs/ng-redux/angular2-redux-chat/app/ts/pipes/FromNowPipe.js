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
var moment = require("moment");
/**
 * FromNowPipe let's us convert a date into a human-readable relative-time
 * such as "10 minutes ago".
 */
var FromNowPipe = /** @class */ (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return moment(value).fromNow();
    };
    FromNowPipe = __decorate([
        core_1.Pipe({
            name: 'fromNow'
        })
    ], FromNowPipe);
    return FromNowPipe;
}());
exports.FromNowPipe = FromNowPipe;
exports.fromNowPipeInjectables = [
    FromNowPipe
];
