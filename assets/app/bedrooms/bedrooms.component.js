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
var bedroom_input_component_1 = require("./bedroom-input.component");
var bedrooms_list_component_1 = require("./bedrooms-list.component");
var BedroomsComponent = (function () {
    function BedroomsComponent() {
    }
    BedroomsComponent = __decorate([
        core_1.Component({
            selector: 'my-bedrooms',
            template: "\n        <div class=\"row spacing\">\n            <my-bedroom-input></my-bedroom-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-bedroom-list></my-bedroom-list>\n        </div> \n    ",
            directives: [bedrooms_list_component_1.BedroomsListComponent, bedroom_input_component_1.BedroomInputComponent]
        })
    ], BedroomsComponent);
    return BedroomsComponent;
}());
exports.BedroomsComponent = BedroomsComponent;
//# sourceMappingURL=bedrooms.component.js.map