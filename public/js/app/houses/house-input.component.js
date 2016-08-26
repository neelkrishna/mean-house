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
var bedroom_service_1 = require("../bedrooms/bedroom.service");
var house_service_1 = require("./house.service");
var error_service_1 = require("../errors/error.service");
require('rxjs/Rx');
var HouseInputComponent = (function () {
    function HouseInputComponent(_houseService, _bedroomService, _errorService) {
        this._houseService = _houseService;
        this._bedroomService = _bedroomService;
        this._errorService = _errorService;
        this.house = null;
        this.bedroomList = null;
    }
    HouseInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.house) {
            this.house.address = form.address;
            this.house.sqFt = form.sqFt;
            this.house.bedroomIds = form.bedrooms;
            this._houseService.updateHouse(this.house)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
            this.house = null;
        }
        else {
            var house = new house_1.House(form.address, form.sqFt, form.bedrooms, null);
            this._houseService.addHouse(house)
                .subscribe(function (data) {
                console.log(data);
                _this._houseService.houses.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    HouseInputComponent.prototype.onCancel = function () {
        this.house = null;
    };
    HouseInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._houseService.editClicked.subscribe(function (house) {
            _this.house = house;
        });
    };
    HouseInputComponent = __decorate([
        core_1.Component({
            selector: 'my-house-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"address\">Address</label>\n                    <input ngControl=\"address\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"house?.address\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sqFt\">Square Footage</label>\n                    <input ngControl=\"sqFt\" type=\"text\" class=\"form-control\" id=\"sQft\" #input [ngModel]=\"house?.sqFt\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">{{ !house ? \"Add House\" : \"Update House\" }}</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"house\">Cancel</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, bedroom_service_1.BedroomService, error_service_1.ErrorService])
    ], HouseInputComponent);
    return HouseInputComponent;
}());
exports.HouseInputComponent = HouseInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHNCQUFzQixTQUFTLENBQUMsQ0FBQTtBQUVoQyxnQ0FBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUM3RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBc0JqQjtJQUdJLDZCQUFvQixhQUEwQixFQUFVLGVBQThCLEVBQVUsYUFBMkI7UUFBdkcsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRjNILFVBQUssR0FBUyxJQUFJLENBQUM7UUFDbkIsZ0JBQVcsR0FBYSxJQUFJLENBQUM7SUFFN0IsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxJQUFRO1FBQWpCLGlCQXdCQztRQXRCRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFNLEtBQUssR0FBUyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQzdCLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBN0RMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGc3QkFlVDtTQUNKLENBQUM7OzJCQUFBO0lBNENGLDBCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSwyQkFBbUIsc0JBMkMvQixDQUFBIiwiZmlsZSI6ImhvdXNlcy9ob3VzZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmVlbGtyaXNobmEgb24gOC8xNS8xNi5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBIb3VzZSB9IGZyb20gXCIuL2hvdXNlXCI7XG5pbXBvcnQgeyBCZWRyb29tIH0gZnJvbSBcIi4uL2JlZHJvb21zL2JlZHJvb21cIjtcbmltcG9ydCB7IEJlZHJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uL2JlZHJvb21zL2JlZHJvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4vaG91c2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaG91c2UtaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZi52YWx1ZSlcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dCBbbmdNb2RlbF09XCJob3VzZT8uYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzcUZ0XCI+U3F1YXJlIEZvb3RhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwic3FGdFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInNRZnRcIiAjaW5wdXQgW25nTW9kZWxdPVwiaG91c2U/LnNxRnRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPnt7ICFob3VzZSA/IFwiQWRkIEhvdXNlXCIgOiBcIlVwZGF0ZSBIb3VzZVwiIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJob3VzZVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBIb3VzZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGhvdXNlOkhvdXNlID0gbnVsbDtcbiAgICBiZWRyb29tTGlzdDpCZWRyb29tW10gPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hvdXNlU2VydmljZTpIb3VzZVNlcnZpY2UsIHByaXZhdGUgX2JlZHJvb21TZXJ2aWNlOkJlZHJvb21TZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG5cbiAgICAgICAgaWYodGhpcy5ob3VzZSl7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmFkZHJlc3MgPSBmb3JtLmFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLnNxRnQgPSBmb3JtLnNxRnQ7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmJlZHJvb21JZHMgPSBmb3JtLmJlZHJvb21zO1xuICAgICAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLnVwZGF0ZUhvdXNlKHRoaXMuaG91c2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmhvdXNlID0gbnVsbDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCBob3VzZTpIb3VzZSA9IG5ldyBIb3VzZShmb3JtLmFkZHJlc3MsIGZvcm0uc3FGdCwgZm9ybS5iZWRyb29tcywgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuYWRkSG91c2UoaG91c2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5ob3VzZXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQ2FuY2VsKCl7XG4gICAgICAgIHRoaXMuaG91c2UgPSBudWxsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5lZGl0Q2xpY2tlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBob3VzZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VzZSA9IGhvdXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
