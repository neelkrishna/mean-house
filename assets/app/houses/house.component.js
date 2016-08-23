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
var HouseComponent = (function () {
    function HouseComponent(_houseService) {
        this._houseService = _houseService;
        this.editClicked = new core_1.EventEmitter();
    }
    HouseComponent.prototype.onEdit = function () {
        this._houseService.editHouse(this.house);
    };
    HouseComponent.prototype.onDelete = function () {
        this._houseService.deleteHouse(this.house)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.Input()
    ], HouseComponent.prototype, "house");
    __decorate([
        core_1.Output()
    ], HouseComponent.prototype, "editClicked");
    HouseComponent = __decorate([
        core_1.Component({
            selector: 'my-house',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ house.address }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ house.bedrooms }} bedrooms | {{ house.sqFt }} sq. ft\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        })
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;
//# sourceMappingURL=house.component.js.map