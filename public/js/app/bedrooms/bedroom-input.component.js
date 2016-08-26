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
var house_service_1 = require("../houses/house.service");
var error_service_1 = require("../errors/error.service");
var BedroomInputComponent = (function () {
    function BedroomInputComponent(_bedroomService, _houseService, _errorService) {
        this._bedroomService = _bedroomService;
        this._houseService = _houseService;
        this._errorService = _errorService;
        this.bedroom = null;
        this.houseList = null;
    }
    BedroomInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.bedroom) {
            this.bedroom.bedSize = form.bedSize;
            this.bedroom.sqFt = form.sqFt;
            this.bedroom.houseId = form.houseId;
            this._bedroomService.updateBedroom(this.bedroom)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
            this.bedroom = null;
        }
        else {
            var bedroom = new bedroom_1.Bedroom(form.bedSize, form.sqFt, form.houseId, null);
            this._bedroomService.addBedroom(bedroom)
                .subscribe(function (data) {
                console.log(data);
                _this._bedroomService.bedrooms.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    BedroomInputComponent.prototype.onCancel = function () {
        this.bedroom = null;
    };
    BedroomInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bedroomService.editClicked.subscribe(function (bedroom) {
            _this.bedroom = bedroom;
        });
        this._houseService.getHouses()
            .subscribe(function (houses) {
            _this.houseList = houses;
            _this._houseService.houses.push(houses);
        });
    };
    BedroomInputComponent = __decorate([
        core_1.Component({
            selector: 'my-bedroom-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"bedSize\">Bed Size</label>\n                    <input ngControl=\"bedSize\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"bedroom?.bedSize\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sqFt\">Square Footage</label>\n                    <input ngControl=\"sqFt\" type=\"text\" class=\"form-control\" id=\"sqFt\" #input [ngModel]=\"bedroom?.sqFt\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"house\">House</label>\n                    <select id=\"houseSelect\" ngModel=\"bedroom?.houseId\" ngControl=\"houseId\" class=\"form-control\" >\n                        <option *ngFor=\"let house of houseList\" value=\"{{house.houseId}}\">{{ house.address }}</option>\n                    </select>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">{{ !bedroom ? \"Add Bedroom\" : \"Edit Bedroom\" }}</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"bedroom\">Cancel</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService, house_service_1.HouseService, error_service_1.ErrorService])
    ], BedroomInputComponent);
    return BedroomInputComponent;
}());
exports.BedroomInputComponent = BedroomInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb20taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFFcEMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUEyQnZEO0lBR0ksK0JBQW9CLGVBQThCLEVBQVUsYUFBMEIsRUFBVSxhQUEyQjtRQUF2RyxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFGM0gsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQVcsSUFBSSxDQUFDO0lBRXpCLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkF1QkM7UUF0QkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMzQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBTSxPQUFPLEdBQVcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFDVixDQUFDO0lBRUwsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDdEMsVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7UUFHRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FDSixDQUFDO0lBRVYsQ0FBQztJQTVFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSw4MENBcUJUO1NBQ0osQ0FBQzs7NkJBQUE7SUFxREYsNEJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLDZCQUFxQix3QkFvRGpDLENBQUEiLCJmaWxlIjoiYmVkcm9vbXMvYmVkcm9vbS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgbmVlbGtyaXNobmEgb24gOC8xNS8xNi5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCZWRyb29tIH0gZnJvbSBcIi4vYmVkcm9vbVwiO1xuaW1wb3J0IHsgSG91c2UgfSBmcm9tIFwiLi4vaG91c2VzL2hvdXNlXCI7XG5pbXBvcnQgeyBCZWRyb29tU2VydmljZSB9IGZyb20gXCIuL2JlZHJvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2hvdXNlcy9ob3VzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1iZWRyb29tLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmVkU2l6ZVwiPkJlZCBTaXplPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImJlZFNpemVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0IFtuZ01vZGVsXT1cImJlZHJvb20/LmJlZFNpemVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3FGdFwiPlNxdWFyZSBGb290YWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cInNxRnRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJzcUZ0XCIgI2lucHV0IFtuZ01vZGVsXT1cImJlZHJvb20/LnNxRnRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaG91c2VcIj5Ib3VzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJob3VzZVNlbGVjdFwiIG5nTW9kZWw9XCJiZWRyb29tPy5ob3VzZUlkXCIgbmdDb250cm9sPVwiaG91c2VJZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaG91c2Ugb2YgaG91c2VMaXN0XCIgdmFsdWU9XCJ7e2hvdXNlLmhvdXNlSWR9fVwiPnt7IGhvdXNlLmFkZHJlc3MgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyAhYmVkcm9vbSA/IFwiQWRkIEJlZHJvb21cIiA6IFwiRWRpdCBCZWRyb29tXCIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiAqbmdJZj1cImJlZHJvb21cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQmVkcm9vbUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGJlZHJvb206QmVkcm9vbSA9IG51bGw7XG4gICAgaG91c2VMaXN0OkhvdXNlW10gPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2JlZHJvb21TZXJ2aWNlOkJlZHJvb21TZXJ2aWNlLCBwcml2YXRlIF9ob3VzZVNlcnZpY2U6SG91c2VTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG4gICAgICAgIGlmKHRoaXMuYmVkcm9vbSl7XG4gICAgICAgICAgICB0aGlzLmJlZHJvb20uYmVkU2l6ZSA9IGZvcm0uYmVkU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuYmVkcm9vbS5zcUZ0ID0gZm9ybS5zcUZ0O1xuICAgICAgICAgICAgdGhpcy5iZWRyb29tLmhvdXNlSWQgPSBmb3JtLmhvdXNlSWQ7XG4gICAgICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS51cGRhdGVCZWRyb29tKHRoaXMuYmVkcm9vbSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuYmVkcm9vbSA9IG51bGw7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3QgYmVkcm9vbTpCZWRyb29tID0gbmV3IEJlZHJvb20oZm9ybS5iZWRTaXplLCBmb3JtLnNxRnQsIGZvcm0uaG91c2VJZCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS5hZGRCZWRyb29tKGJlZHJvb20pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JlZHJvb21TZXJ2aWNlLmJlZHJvb21zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpe1xuICAgICAgICB0aGlzLmJlZHJvb20gPSBudWxsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2JlZHJvb21TZXJ2aWNlLmVkaXRDbGlja2VkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGJlZHJvb20gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVkcm9vbSA9IGJlZHJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cblxuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuZ2V0SG91c2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgaG91c2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZUxpc3QgPSBob3VzZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5ob3VzZXMucHVzaChob3VzZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
