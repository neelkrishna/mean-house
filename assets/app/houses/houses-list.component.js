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
var house_component_1 = require("./house.component");
var HousesListComponent = (function () {
    function HousesListComponent(_houseService) {
        this._houseService = _houseService;
    }
    HousesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._houseService.getHouses()
            .subscribe(function (houses) {
            _this.houses = houses;
            _this._houseService.houses = houses;
        });
    };
    HousesListComponent = __decorate([
        core_1.Component({
            selector: 'my-house-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-house *ngFor=\"let house of houses\" [house]=\"house\" (editClicked)=\"house.content = $event\"></my-house>\n        </section>\n    ",
            directives: [house_component_1.HouseComponent]
        })
    ], HousesListComponent);
    return HousesListComponent;
})();
exports.HousesListComponent = HousesListComponent;
//# sourceMappingURL=houses-list.component.js.map