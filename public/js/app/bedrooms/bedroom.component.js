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
var BedroomComponent = (function () {
    function BedroomComponent(_bedroomService, _houseService, _errorService) {
        this._bedroomService = _bedroomService;
        this._houseService = _houseService;
        this._errorService = _errorService;
        this.editClicked = new core_1.EventEmitter();
    }
    BedroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.bedroom.houseId) {
            this._houseService.getHouseAddress(this.bedroom.houseId)
                .subscribe(function (data) { return _this.houseAddress = data; }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    BedroomComponent.prototype.onEdit = function () {
        this._bedroomService.editBedroom(this.bedroom);
    };
    BedroomComponent.prototype.onDelete = function () {
        var _this = this;
        this._bedroomService.deleteBedroom(this.bedroom)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
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
        __metadata('design:paramtypes', [bedroom_service_1.BedroomService, house_service_1.HouseService, error_service_1.ErrorService])
    ], BedroomComponent);
    return BedroomComponent;
}());
exports.BedroomComponent = BedroomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZHJvb21zL2JlZHJvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUV2RSx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFDcEMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFtQ3ZEO0lBS0ksMEJBQXFCLGVBQStCLEVBQVUsYUFBMkIsRUFBVSxhQUEyQjtRQUF6RyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSHBILGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFHOEUsQ0FBQztJQUVsSSxtQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7aUJBQ25ELFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUF4QixDQUF3QixFQUNoQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBM0JEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQW5DYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUscWxCQWVUO1lBQ0QsTUFBTSxFQUFFLENBQUMsMlRBYVIsQ0FBQztTQUNMLENBQUM7O3dCQUFBO0lBOEJGLHVCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSx3QkFBZ0IsbUJBNkI1QixDQUFBIiwiZmlsZSI6ImJlZHJvb21zL2JlZHJvb20uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTUvMTYuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmVkcm9vbSB9IGZyb20gXCIuL2JlZHJvb21cIjtcbmltcG9ydCB7IEJlZHJvb21TZXJ2aWNlIH0gZnJvbSBcIi4vYmVkcm9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIb3VzZVNlcnZpY2UgfSBmcm9tIFwiLi4vaG91c2VzL2hvdXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWJlZHJvb20nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7eyBiZWRyb29tLmJlZFNpemUgfX0gYmVkXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIEJlbG9uZ3MgdG8ge3sgaG91c2VBZGRyZXNzID8gaG91c2VBZGRyZXNzIDogXCJubyBob3VzZVwiIH19IHwge3sgYmVkcm9vbS5zcUZ0IH19IHNxLiBmdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOSU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBCZWRyb29tQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBiZWRyb29tOkJlZHJvb207XG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgaG91c2VBZGRyZXNzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2JlZHJvb21TZXJ2aWNlOiBCZWRyb29tU2VydmljZSwgcHJpdmF0ZSBfaG91c2VTZXJ2aWNlOiBIb3VzZVNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgaWYodGhpcy5iZWRyb29tLmhvdXNlSWQpe1xuICAgICAgICAgICAgdGhpcy5faG91c2VTZXJ2aWNlLmdldEhvdXNlQWRkcmVzcyh0aGlzLmJlZHJvb20uaG91c2VJZClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuaG91c2VBZGRyZXNzID0gZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uRWRpdCgpIHtcbiAgICAgICAgdGhpcy5fYmVkcm9vbVNlcnZpY2UuZWRpdEJlZHJvb20odGhpcy5iZWRyb29tKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fYmVkcm9vbVNlcnZpY2UuZGVsZXRlQmVkcm9vbSh0aGlzLmJlZHJvb20pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
