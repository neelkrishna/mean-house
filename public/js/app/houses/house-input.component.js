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
require('rxjs/Rx');
var HouseInputComponent = (function () {
    function HouseInputComponent(_houseService, _bedroomService) {
        this._houseService = _houseService;
        this._bedroomService = _bedroomService;
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
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.house = null;
        }
        else {
            var house = new house_1.House(form.address, form.sqFt, form.bedrooms, null);
            this._houseService.addHouse(house)
                .subscribe(function (data) {
                console.log(data);
                _this._houseService.houses.push(data);
            }, function (error) { return console.error(error); });
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
        __metadata('design:paramtypes', [house_service_1.HouseService, bedroom_service_1.BedroomService])
    ], HouseInputComponent);
    return HouseInputComponent;
}());
exports.HouseInputComponent = HouseInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHNCQUFzQixTQUFTLENBQUMsQ0FBQTtBQUVoQyxnQ0FBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUM3RCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBc0JqQjtJQUdJLDZCQUFvQixhQUEwQixFQUFVLGVBQThCO1FBQWxFLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFGdEYsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFhLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLElBQVE7UUFBakIsaUJBd0JDO1FBdEJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBTSxLQUFLLEdBQVMsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUM3QixTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBN0RMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGc3QkFlVDtTQUNKLENBQUM7OzJCQUFBO0lBNENGLDBCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSwyQkFBbUIsc0JBMkMvQixDQUFBIiwiZmlsZSI6ImhvdXNlcy9ob3VzZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmVlbGtyaXNobmEgb24gOC8xNS8xNi5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBIb3VzZSB9IGZyb20gXCIuL2hvdXNlXCI7XG5pbXBvcnQgeyBCZWRyb29tIH0gZnJvbSBcIi4uL2JlZHJvb21zL2JlZHJvb21cIjtcbmltcG9ydCB7IEJlZHJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uL2JlZHJvb21zL2JlZHJvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4vaG91c2Uuc2VydmljZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWhvdXNlLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiYWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQgW25nTW9kZWxdPVwiaG91c2U/LmFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3FGdFwiPlNxdWFyZSBGb290YWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNxRnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJzUWZ0XCIgI2lucHV0IFtuZ01vZGVsXT1cImhvdXNlPy5zcUZ0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyAhaG91c2UgPyBcIkFkZCBIb3VzZVwiIDogXCJVcGRhdGUgSG91c2VcIiB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiICpuZ0lmPVwiaG91c2VcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSG91c2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBob3VzZTpIb3VzZSA9IG51bGw7XG4gICAgYmVkcm9vbUxpc3Q6QmVkcm9vbVtdID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ob3VzZVNlcnZpY2U6SG91c2VTZXJ2aWNlLCBwcml2YXRlIF9iZWRyb29tU2VydmljZTpCZWRyb29tU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG5cbiAgICAgICAgaWYodGhpcy5ob3VzZSl7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmFkZHJlc3MgPSBmb3JtLmFkZHJlc3M7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLnNxRnQgPSBmb3JtLnNxRnQ7XG4gICAgICAgICAgICB0aGlzLmhvdXNlLmJlZHJvb21JZHMgPSBmb3JtLmJlZHJvb21zO1xuICAgICAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLnVwZGF0ZUhvdXNlKHRoaXMuaG91c2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5ob3VzZSA9IG51bGw7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgaG91c2U6SG91c2UgPSBuZXcgSG91c2UoZm9ybS5hZGRyZXNzLCBmb3JtLnNxRnQsIGZvcm0uYmVkcm9vbXMsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLmFkZEhvdXNlKGhvdXNlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuaG91c2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DYW5jZWwoKXtcbiAgICAgICAgdGhpcy5ob3VzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLmVkaXRDbGlja2VkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGhvdXNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXNlID0gaG91c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
