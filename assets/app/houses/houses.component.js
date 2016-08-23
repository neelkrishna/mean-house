var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var house_input_component_1 = require("./house-input.component");
var houses_list_component_1 = require("./houses-list.component");
var HousesComponent = (function () {
    function HousesComponent() {
    }
    HousesComponent = __decorate([
        core_1.Component({
            selector: 'my-houses',
            template: "\n        <div class=\"row spacing\">\n            <my-house-input></my-house-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-house-list></my-house-list>\n        </div> \n    ",
            directives: [houses_list_component_1.HousesListComponent, house_input_component_1.HouseInputComponent]
        })
    ], HousesComponent);
    return HousesComponent;
})();
exports.HousesComponent = HousesComponent;
//# sourceMappingURL=houses.component.js.map