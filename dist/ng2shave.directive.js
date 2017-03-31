var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Directive, ElementRef } from '@angular/core';
import shave from "shave";
export var ShaveDirective = (function () {
    function ShaveDirective(ele) {
        this.ele = ele;
        this._shaveOptions = {};
        this._height = 100;
    }
    Object.defineProperty(ShaveDirective.prototype, "shave", {
        get: function () {
            return this._shaveOptions;
        },
        set: function (val) {
            if (val) {
                this._shaveOptions = val;
            }
            this._runShave();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShaveDirective.prototype, "shaveHeight", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            this._height = val;
            this._runShave();
        },
        enumerable: true,
        configurable: true
    });
    ShaveDirective.prototype._runShave = function () {
        if (typeof this._height !== "number") {
            throw new Error("Height must be a number");
        }
        shave(this.ele.nativeElement, this.shaveHeight, this.shave);
    };
    ShaveDirective.prototype.ngAfterViewInit = function() {
      this._runShave();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ShaveDirective.prototype, "shave", null);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], ShaveDirective.prototype, "shaveHeight", null);
    ShaveDirective = __decorate([
        Directive({
            selector: "[shave]"
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], ShaveDirective);
    return ShaveDirective;
}());
//# sourceMappingURL=ng2shave.directive.js.map
