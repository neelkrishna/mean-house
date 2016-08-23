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
var BedroomInputComponent = (function () {
    function BedroomInputComponent(_bedroomService, _houseService) {
        this._bedroomService = _bedroomService;
        this._houseService = _houseService;
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
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.bedroom = null;
        }
        else {
            var bedroom = new bedroom_1.Bedroom(form.bedSize, form.sqFt, form.houseId, null);
            this._bedroomService.addBedroom(bedroom)
                .subscribe(function (data) {
                console.log(data);
                _this._bedroomService.bedrooms.push(data);
            }, function (error) { return console.log(error.error); });
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
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService, house_service_1.HouseService])
    ], BedroomInputComponent);
    return BedroomInputComponent;
}());
exports.BedroomInputComponent = BedroomInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb20taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFFcEMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUE0QnZEO0lBR0ksK0JBQW9CLGVBQThCLEVBQVUsYUFBMEI7UUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUZ0RixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxJQUFJLENBQUM7SUFFekIsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFRO1FBQWpCLGlCQXVCQztRQXRCRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzNDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQU0sT0FBTyxHQUFXLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ25DLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUNwQyxDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3RDLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFDO1FBR0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQ0osQ0FBQztJQUVWLENBQUM7SUE1RUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsODBDQXFCVDtTQUNKLENBQUM7OzZCQUFBO0lBcURGLDRCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSw2QkFBcUIsd0JBb0RqQyxDQUFBIiwiZmlsZSI6ImJlZHJvb21zL2JlZHJvb20taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTUvMTYuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmVkcm9vbSB9IGZyb20gXCIuL2JlZHJvb21cIjtcbmltcG9ydCB7IEhvdXNlIH0gZnJvbSBcIi4uL2hvdXNlcy9ob3VzZVwiO1xuaW1wb3J0IHsgQmVkcm9vbVNlcnZpY2UgfSBmcm9tIFwiLi9iZWRyb29tLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhvdXNlU2VydmljZSB9IGZyb20gXCIuLi9ob3VzZXMvaG91c2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhdHVzU2VsZWN0b3IgfSBmcm9tIFwiLi4vc3RhdHVzLXNlbGVjdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYmVkcm9vbS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJlZFNpemVcIj5CZWQgU2l6ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJiZWRTaXplXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dCBbbmdNb2RlbF09XCJiZWRyb29tPy5iZWRTaXplXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNxRnRcIj5TcXVhcmUgRm9vdGFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJzcUZ0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwic3FGdFwiICNpbnB1dCBbbmdNb2RlbF09XCJiZWRyb29tPy5zcUZ0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXNlXCI+SG91c2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiaG91c2VTZWxlY3RcIiBuZ01vZGVsPVwiYmVkcm9vbT8uaG91c2VJZFwiIG5nQ29udHJvbD1cImhvdXNlSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGhvdXNlIG9mIGhvdXNlTGlzdFwiIHZhbHVlPVwie3tob3VzZS5ob3VzZUlkfX1cIj57eyBob3VzZS5hZGRyZXNzIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgIWJlZHJvb20gPyBcIkFkZCBCZWRyb29tXCIgOiBcIkVkaXQgQmVkcm9vbVwiIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJiZWRyb29tXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJlZHJvb21JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBiZWRyb29tOkJlZHJvb20gPSBudWxsO1xuICAgIGhvdXNlTGlzdDpIb3VzZVtdID0gbnVsbDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9iZWRyb29tU2VydmljZTpCZWRyb29tU2VydmljZSwgcHJpdmF0ZSBfaG91c2VTZXJ2aWNlOkhvdXNlU2VydmljZSkge1xuICAgIH1cblxuICAgIG9uU3VibWl0KGZvcm06YW55KSB7XG4gICAgICAgIGlmKHRoaXMuYmVkcm9vbSl7XG4gICAgICAgICAgICB0aGlzLmJlZHJvb20uYmVkU2l6ZSA9IGZvcm0uYmVkU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuYmVkcm9vbS5zcUZ0ID0gZm9ybS5zcUZ0O1xuICAgICAgICAgICAgdGhpcy5iZWRyb29tLmhvdXNlSWQgPSBmb3JtLmhvdXNlSWQ7XG4gICAgICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS51cGRhdGVCZWRyb29tKHRoaXMuYmVkcm9vbSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmJlZHJvb20gPSBudWxsO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IGJlZHJvb206QmVkcm9vbSA9IG5ldyBCZWRyb29tKGZvcm0uYmVkU2l6ZSwgZm9ybS5zcUZ0LCBmb3JtLmhvdXNlSWQsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fYmVkcm9vbVNlcnZpY2UuYWRkQmVkcm9vbShiZWRyb29tKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS5iZWRyb29tcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5lcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpe1xuICAgICAgICB0aGlzLmJlZHJvb20gPSBudWxsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX2JlZHJvb21TZXJ2aWNlLmVkaXRDbGlja2VkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGJlZHJvb20gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVkcm9vbSA9IGJlZHJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cblxuICAgICAgICB0aGlzLl9ob3VzZVNlcnZpY2UuZ2V0SG91c2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgaG91c2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3VzZUxpc3QgPSBob3VzZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5ob3VzZXMucHVzaChob3VzZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
