"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var ObservableCmp = /** @class */ (function () {
    function ObservableCmp(changeDetector) {
        this.changeDetector = changeDetector;
        this.counter = 0;
    }
    ObservableCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.items.subscribe(function (v) {
            console.log('got value', v);
            _this.counter++;
            if (_this.counter % 5 == 0) {
                _this.changeDetector.markForCheck();
            }
        }, null, function () {
            _this.changeDetector.markForCheck();
        });
    };
    __decorate([
        core_1.Input()
    ], ObservableCmp.prototype, "items", void 0);
    ObservableCmp = __decorate([
        core_1.Component({
            selector: 'observable',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n  <div>\n    <div>Total items: {{counter}}</div>\n  </div>\n  "
        })
    ], ObservableCmp);
    return ObservableCmp;
}());
exports.ObservableCmp = ObservableCmp;
var ObservableChangeDetectionSampleApp = /** @class */ (function () {
    function ObservableChangeDetectionSampleApp() {
        this.itemObservable = Rx_1.Observable.timer(100, 100).take(101);
    }
    ObservableChangeDetectionSampleApp = __decorate([
        core_1.Component({
            selector: 'change-detection-sample-app',
            template: "\n  <observable [items]=\"itemObservable\"></observable>\n  "
        })
    ], ObservableChangeDetectionSampleApp);
    return ObservableChangeDetectionSampleApp;
}());
exports.ObservableChangeDetectionSampleApp = ObservableChangeDetectionSampleApp;
