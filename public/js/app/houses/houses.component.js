"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        }), 
        __metadata('design:paramtypes', [])
    ], HousesComponent);
    return HousesComponent;
}());
exports.HousesComponent = HousesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsc0NBQW9DLHlCQUF5QixDQUFDLENBQUE7QUFDOUQsc0NBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFjN0Q7SUFBQTtJQUVBLENBQUM7SUFkRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsK01BT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSwyQ0FBbUIsQ0FBQztTQUN6RCxDQUFDOzt1QkFBQTtJQUdGLHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsImZpbGUiOiJob3VzZXMvaG91c2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEhvdXNlSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9ob3VzZS1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvdXNlc0xpc3RDb21wb25lbnR9IGZyb20gXCIuL2hvdXNlcy1saXN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWhvdXNlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktaG91c2UtaW5wdXQ+PC9teS1ob3VzZS1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG15LWhvdXNlLWxpc3Q+PC9teS1ob3VzZS1saXN0PlxuICAgICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSG91c2VzTGlzdENvbXBvbmVudCwgSG91c2VJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSG91c2VzQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
