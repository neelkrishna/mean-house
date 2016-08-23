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
var BedroomComponent = (function () {
    function BedroomComponent(_bedroomService, _houseService) {
        this._bedroomService = _bedroomService;
        this._houseService = _houseService;
        this.editClicked = new core_1.EventEmitter();
    }
    BedroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.bedroom.houseId) {
            this._houseService.getHouseAddress(this.bedroom.houseId)
                .subscribe(function (data) { return _this.houseAddress = data; }, function (error) { return console.error(error); });
        }
    };
    BedroomComponent.prototype.onEdit = function () {
        this._bedroomService.editBedroom(this.bedroom);
    };
    BedroomComponent.prototype.onDelete = function () {
        this._bedroomService.deleteBedroom(this.bedroom)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
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
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ bedroom.bedSize }} bed\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    Belongs to {{ houseAddress ? houseAddress : \"no house\" }} | {{ bedroom.sqFt }} sq. ft\n                </div>\n                <div class=\"config\">\n                    <a (click)=\"onEdit()\">Edit</a>\n                    <a (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService, house_service_1.HouseService])
    ], BedroomComponent);
    return BedroomComponent;
}());
exports.BedroomComponent = BedroomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUV2RSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFDcEMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFtQ3ZEO0lBS0ksMEJBQXFCLGVBQStCLEVBQVUsYUFBMkI7UUFBcEUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIL0UsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUd5QyxDQUFDO0lBRTdGLG1DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDbkQsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQXhCLENBQXdCLEVBQ2hDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztRQUNWLENBQUM7SUFFTCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0MsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQTNCRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFuQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHFsQkFlVDtZQUNELE1BQU0sRUFBRSxDQUFDLDJUQWFSLENBQUM7U0FDTCxDQUFDOzt3QkFBQTtJQThCRix1QkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSIsImZpbGUiOiJiZWRyb29tcy9iZWRyb29tLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuZWVsa3Jpc2huYSBvbiA4LzE1LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJlZHJvb20gfSBmcm9tIFwiLi9iZWRyb29tXCI7XG5pbXBvcnQgeyBCZWRyb29tU2VydmljZSB9IGZyb20gXCIuL2JlZHJvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2hvdXNlcy9ob3VzZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYmVkcm9vbScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIHt7IGJlZHJvb20uYmVkU2l6ZSB9fSBiZWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgQmVsb25ncyB0byB7eyBob3VzZUFkZHJlc3MgPyBob3VzZUFkZHJlc3MgOiBcIm5vIGhvdXNlXCIgfX0gfCB7eyBiZWRyb29tLnNxRnQgfX0gc3EuIGZ0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEJlZHJvb21Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGJlZHJvb206QmVkcm9vbTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBob3VzZUFkZHJlc3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYmVkcm9vbVNlcnZpY2U6IEJlZHJvb21TZXJ2aWNlLCBwcml2YXRlIF9ob3VzZVNlcnZpY2U6IEhvdXNlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIGlmKHRoaXMuYmVkcm9vbS5ob3VzZUlkKXtcbiAgICAgICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5nZXRIb3VzZUFkZHJlc3ModGhpcy5iZWRyb29tLmhvdXNlSWQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmhvdXNlQWRkcmVzcyA9IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25FZGl0KCkge1xuICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS5lZGl0QmVkcm9vbSh0aGlzLmJlZHJvb20pO1xuICAgIH1cblxuICAgIG9uRGVsZXRlKCkge1xuICAgICAgICB0aGlzLl9iZWRyb29tU2VydmljZS5kZWxldGVCZWRyb29tKHRoaXMuYmVkcm9vbSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
