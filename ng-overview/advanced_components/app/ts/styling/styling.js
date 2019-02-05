"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var externalCSSUrl = require('file-loader!./external.css'); // webpack gives a URL
var InlineStyle = /** @class */ (function () {
    function InlineStyle() {
    }
    InlineStyle = __decorate([
        core_2.Component({
            selector: 'inline-style',
            styles: ["\n  .highlight {\n    border: 2px solid red;\n    background-color: yellow;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  "],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    Inline style example\n  </h4>\n\n  <div class=\"highlight\">\n    This uses component <code>styles</code>\n    property\n  </div>\n  "
        })
    ], InlineStyle);
    return InlineStyle;
}());
var ExternalStyle = /** @class */ (function () {
    function ExternalStyle() {
    }
    ExternalStyle = __decorate([
        core_2.Component({
            selector: 'external-style',
            styleUrls: [externalCSSUrl],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    External style example\n  </h4>\n\n  <div class=\"highlight\">\n    This uses component <code>styleUrls</code>\n    property\n  </div>\n  "
        })
    ], ExternalStyle);
    return ExternalStyle;
}());
var NativeEncapsulation = /** @class */ (function () {
    function NativeEncapsulation() {
    }
    NativeEncapsulation = __decorate([
        core_2.Component({
            selector: "native-encapsulation",
            styles: ["\n  .highlight {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 3px;\n    margin-botton: 20px;\n  }"],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    Native encapsulation example\n  </h4>\n\n  <div class=\"highlight\">\n    This component uses <code>ViewEncapsulation.Native</code>\n  </div>\n  ",
            encapsulation: core_2.ViewEncapsulation.Native
        })
    ], NativeEncapsulation);
    return NativeEncapsulation;
}());
var NoEncapsulation = /** @class */ (function () {
    function NoEncapsulation() {
    }
    NoEncapsulation = __decorate([
        core_2.Component({
            selector: "no-encapsulation",
            styles: ["\n  .highlight {\n    border: 2px dashed red;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  "],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    No encapsulation example\n  </h4>\n\n  <div class=\"highlight\">\n    This component uses <code>ViewEncapsulation.None</code>\n  </div>\n  ",
            encapsulation: core_2.ViewEncapsulation.None
        })
    ], NoEncapsulation);
    return NoEncapsulation;
}());
var StyleSampleApp = /** @class */ (function () {
    function StyleSampleApp() {
    }
    StyleSampleApp = __decorate([
        core_2.Component({
            selector: 'style-sample-app',
            template: "\n    <inline-style></inline-style>\n    <external-style></external-style>\n    <native-encapsulation></native-encapsulation>\n    <no-encapsulation></no-encapsulation>\n  "
        })
    ], StyleSampleApp);
    return StyleSampleApp;
}());
exports.StyleSampleApp = StyleSampleApp;
var components = [
    StyleSampleApp,
    InlineStyle,
    ExternalStyle,
    NativeEncapsulation,
    NoEncapsulation
];
var StyleSampleAppModule = /** @class */ (function () {
    function StyleSampleAppModule() {
    }
    StyleSampleAppModule = __decorate([
        core_1.NgModule({
            declarations: components,
            exports: components
        })
    ], StyleSampleAppModule);
    return StyleSampleAppModule;
}());
exports.StyleSampleAppModule = StyleSampleAppModule;
