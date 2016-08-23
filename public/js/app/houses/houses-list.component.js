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
var house_component_1 = require("./house.component");
var house_service_1 = require("./house.service");
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
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService])
    ], HousesListComponent);
    return HousesListComponent;
}());
exports.HousesListComponent = HousesListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBVy9DO0lBRUksNkJBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUluRCxzQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQXZCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsK01BSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQy9CLENBQUM7OzJCQUFBO0lBZ0JGLDBCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSwyQkFBbUIsc0JBZS9CLENBQUEiLCJmaWxlIjoiaG91c2VzL2hvdXNlcy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuZWVsa3Jpc2huYSBvbiA4LzE1LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEhvdXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vaG91c2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb3VzZSB9IGZyb20gXCIuL2hvdXNlXCI7XG5pbXBvcnQgeyBIb3VzZVNlcnZpY2UgfSBmcm9tIFwiLi9ob3VzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaG91c2UtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxteS1ob3VzZSAqbmdGb3I9XCJsZXQgaG91c2Ugb2YgaG91c2VzXCIgW2hvdXNlXT1cImhvdXNlXCIgKGVkaXRDbGlja2VkKT1cImhvdXNlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LWhvdXNlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSG91c2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvdXNlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaG91c2VTZXJ2aWNlOiBIb3VzZVNlcnZpY2UpIHt9XG5cbiAgICBob3VzZXM6IEhvdXNlW107XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLmdldEhvdXNlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGhvdXNlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91c2VzID0gaG91c2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuaG91c2VzID0gaG91c2VzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
