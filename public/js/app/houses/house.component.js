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
var house_1 = require("./house");
var house_service_1 = require("./house.service");
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
        core_1.Input(), 
        __metadata('design:type', house_1.House)
    ], HouseComponent.prototype, "house", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HouseComponent.prototype, "editClicked", void 0);
    HouseComponent = __decorate([
        core_1.Component({
            selector: 'my-house',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ house.address }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ house.sqFt }} sq. ft\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService])
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLHNCQUFzQixTQUFTLENBQUMsQ0FBQTtBQUNoQyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQW1DL0M7SUFJSSx3QkFBcUIsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFGdEMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUVBLENBQUM7SUFFcEQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDckMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQWZEO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQW5DYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsK2dCQWVUO1lBQ0QsTUFBTSxFQUFFLENBQUMsMlRBYVIsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBa0JGLHFCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxzQkFBYyxpQkFpQjFCLENBQUEiLCJmaWxlIjoiaG91c2VzL2hvdXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuZWVsa3Jpc2huYSBvbiA4LzE1LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEhvdXNlIH0gZnJvbSBcIi4vaG91c2VcIjtcbmltcG9ydCB7IEhvdXNlU2VydmljZSB9IGZyb20gXCIuL2hvdXNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1ob3VzZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHt7IGhvdXNlLmFkZHJlc3MgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaG91c2Uuc3FGdCB9fSBzcS4gZnRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkVkaXQoKVwiPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSG91c2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGhvdXNlOkhvdXNlO1xuICAgIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2hvdXNlU2VydmljZTogSG91c2VTZXJ2aWNlKSB7fVxuXG4gICAgb25FZGl0KCkge1xuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuZWRpdEhvdXNlKHRoaXMuaG91c2UpO1xuICAgIH1cblxuICAgIG9uRGVsZXRlKCkge1xuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuZGVsZXRlSG91c2UodGhpcy5ob3VzZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
