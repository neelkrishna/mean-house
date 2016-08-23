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
        }), 
        __metadata('design:paramtypes', [])
    ], BedroomsComponent);
    return BedroomsComponent;
}());
exports.BedroomsComponent = BedroomsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb21zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsd0NBQXNDLDJCQUEyQixDQUFDLENBQUE7QUFDbEUsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFjakU7SUFBQTtJQUVBLENBQUM7SUFkRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsdU5BT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSwrQ0FBcUIsQ0FBQztTQUM3RCxDQUFDOzt5QkFBQTtJQUdGLHdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx5QkFBaUIsb0JBRTdCLENBQUEiLCJmaWxlIjoiYmVkcm9vbXMvYmVkcm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTUvMTYuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJlZHJvb21JbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2JlZHJvb20taW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCZWRyb29tc0xpc3RDb21wb25lbnR9IGZyb20gXCIuL2JlZHJvb21zLWxpc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYmVkcm9vbXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG15LWJlZHJvb20taW5wdXQ+PC9teS1iZWRyb29tLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktYmVkcm9vbS1saXN0PjwvbXktYmVkcm9vbS1saXN0PlxuICAgICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQmVkcm9vbXNMaXN0Q29tcG9uZW50LCBCZWRyb29tSW5wdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJlZHJvb21zQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
