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
var error_service_1 = require("../errors/error.service");
var HouseComponent = (function () {
    function HouseComponent(_houseService, _errorService) {
        this._houseService = _houseService;
        this._errorService = _errorService;
        this.editClicked = new core_1.EventEmitter();
    }
    HouseComponent.prototype.onEdit = function () {
        this._houseService.editHouse(this.house);
    };
    HouseComponent.prototype.onDelete = function () {
        var _this = this;
        this._houseService.deleteHouse(this.house)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
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
        __metadata('design:paramtypes', [house_service_1.HouseService, error_service_1.ErrorService])
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdXNlcy9ob3VzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBRXZFLHNCQUFzQixTQUFTLENBQUMsQ0FBQTtBQUNoQyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQW1DdkQ7SUFJSSx3QkFBcUIsYUFBMkIsRUFBVSxhQUEyQjtRQUFoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRjNFLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFFcUMsQ0FBQztJQUV6RiwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3JDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBZkQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBbkNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwrZ0JBZVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQywyVEFhUixDQUFDO1NBQ0wsQ0FBQzs7c0JBQUE7SUFrQkYscUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLHNCQUFjLGlCQWlCMUIsQ0FBQSIsImZpbGUiOiJob3VzZXMvaG91c2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG5lZWxrcmlzaG5hIG9uIDgvMTUvMTYuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSG91c2UgfSBmcm9tIFwiLi9ob3VzZVwiO1xuaW1wb3J0IHsgSG91c2VTZXJ2aWNlIH0gZnJvbSBcIi4vaG91c2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaG91c2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7eyBob3VzZS5hZGRyZXNzIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGhvdXNlLnNxRnQgfX0gc3EuIGZ0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29uZmlnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvdXNlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBob3VzZTpIb3VzZTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9ob3VzZVNlcnZpY2U6IEhvdXNlU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvbkVkaXQoKSB7XG4gICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5lZGl0SG91c2UodGhpcy5ob3VzZSk7XG4gICAgfVxuXG4gICAgb25EZWxldGUoKSB7XG4gICAgICAgIHRoaXMuX2hvdXNlU2VydmljZS5kZWxldGVIb3VzZSh0aGlzLmhvdXNlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
