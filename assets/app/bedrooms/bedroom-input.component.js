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
var bedroom_1 = require("./bedroom");
var BedroomInputComponent = (function () {
    function BedroomInputComponent(_bedroomService, _houseService, _errorService) {
        this._bedroomService = _bedroomService;
        this._houseService = _houseService;
        this._errorService = _errorService;
        this.bedroom = null;
        this.houseList = null;
    }
    BedroomInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.bedroom) {
            this.bedroom.bedSize = form.bedSize;
            this.bedroom.sqFt = form.sqFt;
            this.bedroom.houseId = form.houseId;
            this._bedroomService.updateBedroom(this.bedroom)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
            this.bedroom = null;
        }
        else {
            var bedroom = new bedroom_1.Bedroom(form.bedSize, form.sqFt, form.houseId, null);
            this._bedroomService.addBedroom(bedroom)
                .subscribe(function (data) {
                console.log(data);
                _this._bedroomService.bedrooms.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    BedroomInputComponent.prototype.onCancel = function () {
        this.bedroom = null;
    };
    BedroomInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bedroomService.editClicked.subscribe(function (bedroom) {
            _this.bedroom = bedroom;
        });
        this._houseService.getHouses()
            .subscribe(function (houses) {
            _this.houseList = houses;
            _this._houseService.houses.push(houses);
        });
    };
    BedroomInputComponent = __decorate([
        core_1.Component({
            selector: 'my-bedroom-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"bedSize\">Bed Size</label>\n                    <input ngControl=\"bedSize\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"bedroom?.bedSize\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sqFt\">Square Footage</label>\n                    <input ngControl=\"sqFt\" type=\"text\" class=\"form-control\" id=\"sqFt\" #input [ngModel]=\"bedroom?.sqFt\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"house\">House</label>\n                    <select id=\"houseSelect\" ngModel=\"bedroom?.houseId\" ngControl=\"houseId\" class=\"form-control\" >\n                        <option *ngFor=\"let house of houseList\" value=\"{{house.houseId}}\">{{ house.address }}</option>\n                    </select>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">{{ !bedroom ? \"Add Bedroom\" : \"Edit Bedroom\" }}</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"bedroom\">Cancel</button>\n            </form>\n        </section>\n    "
        })
    ], BedroomInputComponent);
    return BedroomInputComponent;
}());
exports.BedroomInputComponent = BedroomInputComponent;
//# sourceMappingURL=bedroom-input.component.js.map