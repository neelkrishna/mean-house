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
var bedroom_1 = require("./bedroom");
var bedroom_service_1 = require("./bedroom.service");
var BedroomComponent = (function () {
    function BedroomComponent(_bedroomService) {
        this._bedroomService = _bedroomService;
        this.editClicked = new core_1.EventEmitter();
    }
    BedroomComponent.prototype.onEdit = function () {
        this._bedroomService.editBedroom(this.bedroom);
    };
    BedroomComponent.prototype.onDelete = function () {
        this._bedroomService.deleteBedroom(this.bedroom);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bedroom_1.Bedroom)
    ], BedroomComponent.prototype, "bedroom", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BedroomComponent.prototype, "editClicked", void 0);
    BedroomComponent = __decorate([
        core_1.Component({
            selector: 'my-bedroom',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ bedroom.bedSize }} bed\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    Belongs to {{ bedroom.bedSize }} | {{ bedroom.sqFt }} sq. ft\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService])
    ], BedroomComponent);
    return BedroomComponent;
}());
exports.BedroomComponent = BedroomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUV2RSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFDcEMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFtQ25EO0lBSUksMEJBQXFCLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUYxQyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO0lBRUksQ0FBQztJQUV4RCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFuQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDBqQkFlVDtZQUNELE1BQU0sRUFBRSxDQUFDLDJUQWFSLENBQUM7U0FDTCxDQUFDOzt3QkFBQTtJQWNGLHVCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx3QkFBZ0IsbUJBYTVCLENBQUEiLCJmaWxlIjoiYmVkcm9vbXMvYmVkcm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmVlbGtyaXNobmEgb24gOC8xNS8xNi5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCZWRyb29tIH0gZnJvbSBcIi4vYmVkcm9vbVwiO1xuaW1wb3J0IHsgQmVkcm9vbVNlcnZpY2UgfSBmcm9tIFwiLi9iZWRyb29tLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1iZWRyb29tJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAge3sgYmVkcm9vbS5iZWRTaXplIH19IGJlZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICBCZWxvbmdzIHRvIHt7IGJlZHJvb20uYmVkU2l6ZSB9fSB8IHt7IGJlZHJvb20uc3FGdCB9fSBzcS4gZnRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQmVkcm9vbUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgYmVkcm9vbTpCZWRyb29tO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2JlZHJvb21TZXJ2aWNlOiBCZWRyb29tU2VydmljZSkge31cblxuICAgIG9uRWRpdCgpIHtcbiAgICAgICAgdGhpcy5fYmVkcm9vbVNlcnZpY2UuZWRpdEJlZHJvb20odGhpcy5iZWRyb29tKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fYmVkcm9vbVNlcnZpY2UuZGVsZXRlQmVkcm9vbSh0aGlzLmJlZHJvb20pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
