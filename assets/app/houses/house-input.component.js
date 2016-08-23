"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by neelkrishna on 8/15/16.
 */
var core_1 = require("@angular/core");
var house_1 = require("./house");
require('rxjs/Rx');
var HouseInputComponent = (function () {
    function HouseInputComponent(_houseService, _bedroomService) {
        this._houseService = _houseService;
        this._bedroomService = _bedroomService;
        this.house = null;
        this.bedroomList = null;
    }
    HouseInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.house) {
            this.house.address = form.address;
            this.house.sqFt = form.sqFt;
            this.house.bedroomIds = form.bedrooms;
            this._houseService.updateHouse(this.house)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.house = null;
        }
        else {
            var house = new house_1.House(form.address, form.sqFt, form.bedrooms, null);
            this._houseService.addHouse(house)
                .subscribe(function (data) {
                console.log(data);
                _this._houseService.houses.push(data);
            }, function (error) { return console.error(error); });
        }
    };
    HouseInputComponent.prototype.onCancel = function () {
        this.house = null;
    };
    HouseInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._houseService.editClicked.subscribe(function (house) {
            _this.house = house;
        });
    };
    HouseInputComponent = __decorate([
        core_1.Component({
            selector: 'my-house-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"address\">Address</label>\n                    <input ngControl=\"address\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"house?.address\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sqFt\">Square Footage</label>\n                    <input ngControl=\"sqFt\" type=\"text\" class=\"form-control\" id=\"sQft\" #input [ngModel]=\"house?.sqFt\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">{{ !house ? \"Add House\" : \"Update House\" }}</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"house\">Cancel</button>\n            </form>\n        </section>\n    "
        })
    ], HouseInputComponent);
    return HouseInputComponent;
}());
exports.HouseInputComponent = HouseInputComponent;
//# sourceMappingURL=house-input.component.js.map